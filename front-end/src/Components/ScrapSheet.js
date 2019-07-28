// const apiEndpoint = 'https://localify.cdn.prismic.io/api/v2'

// state = {
//     cafes: []
//   }

// getCafes = () => {
//     Prismic.api(apiEndpoint).then(api => {
//         api.query(Prismic.Predicates.at('document.type', 'vendors')).then(response => {
//           if (response) {
//             this.setState({ cafes: response.results[0].data })
//             console.log(response.results[0].data)
//           }
//         })
//       })
//   }
//   componentDidMount() {
//     this.getCafes()
//   }
//
//
//
// to engage comments = php -S localhost:7777