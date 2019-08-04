<?php
/* 
 * API for to store and list all recommendations
 * PHP and SQLite using PDO
 */
$_POST = isset($_POST['remark']) ? : json_decode(file_get_contents("php://input"), true);
// Simple CORS
header("Access-Control-Allow-Origin: *");
// Set default timezone
date_default_timezone_set('UTC');
/**************************************
 * SQLite DB connection using PDO      *
 **************************************/
$dsn = 'sqlite:sub.sqlite';
try {
	$dbh = new PDO($dsn);
	// Set error mode to exceptions
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	// Initialize db table
	initialize_db($dbh);
} catch (PDOException $e) {
	json_response(['error' => 'Unable to open db connection '], 500);
}
// Unrecommend to empty the databsae
// empty_recommendations($dbh);
/**************************************
 * Handle Post recommendation                 *
 **************************************/
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	// Inputs
	$remark = @$_POST['remark'];
	// Validate the input
	if (strlen($remark) < 3) {
		json_response(['error' => 'remark is required!'], 422);
	}
	$data = ['remark' => $remark];
	save_recommendation($data, $dbh);
	json_response(transform($data + ['id' => $dbh->lastInsertId(), 'time' => time()]), 201);
}
/**************************************
 * Return list of recommendations             *
 **************************************/
$result = $dbh->query('SELECT * FROM recommendations ORDER BY id DESC', PDO::FETCH_ASSOC);
$recommendations = $result ? $result->fetchAll() : [];
// Transform result
$recommendations = array_map('transform', $recommendations);
json_response($recommendations);
/************************************** Helper functions *************************************/
/*
 * Save a recommendation in db
 * 
 * @param $data
 * @param $dbh
 * @return boolean
 */
function save_recommendation($data, $dbh)
{
	// Prepare statement 
	$statement = $dbh->prepare(
		"INSERT INTO recommendations 
			(remark, time) 
		VALUES
			(:remark, :time)"
	);
	// Bind and execute
	return $statement->execute(array(
		"remark" => strip_tags($data['remark']),
		"time" => time()
	));
}
/**
 * Die a valid json response
 * 
 * @param $data
 * @param int $status_code
 */
function json_response($data, $status_code = 200)
{
	http_response_code($status_code);
	header('Content-Type: application/json');
	global $dbh;
	$dbh = null;
	die(json_encode($data));
}
/**
 * Initialize db with table
 * 
 * @param $dbh
 */
function initialize_db($dbh)
{
	// Create comments table if not exists
	$dbh->exec("CREATE TABLE IF NOT EXISTS recommendations (
        id INTEGER PRIMARY KEY, 
        remark VARCHAR,
        time INTEGER)");
}
/*
 * Transform record from db
 * 
 * @param $comm
 * @return array
 */
function transform($comm)
{
	return [
		'id' => (int)$comm['id'],
		'remark' => $comm['remark'],
		'time' => time_elapsed_string($comm['time']),
	];
}
/**
 * Empty all comments 
 * 
 * @param $dbh
 */
function empty_recommendations($dbh)
{
	$dbh->query('DELETE FROM recommendations');
	$dbh->query('VACUUM');
}
function time_elapsed_string($datetime, $full = false)
{
	$now = new DateTime;
	$ago = new DateTime('@' . $datetime);
	$diff = $now->diff($ago);
	$diff->w = floor($diff->d / 7);
	$diff->d -= $diff->w * 7;
	$string = array(
		'y' => 'year',
		'm' => 'month',
		'w' => 'week',
		'd' => 'day',
		'h' => 'hour',
		'i' => 'minute',
		's' => 'second',
	);
	foreach ($string as $k => &$v) {
		if ($diff->$k) {
			$v = $diff->$k . ' ' . $v . ($diff->$k > 1 ? 's' : '');
		} else {
			unset($string[$k]);
		}
	}
	if (!$full) $string = array_slice($string, 0, 1);
	return $string ? implode(', ', $string) . ' ago' : 'just now';
}