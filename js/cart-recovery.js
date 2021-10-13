const mockData = typeof _mockMarker !== 'undefined'

const imagePlaceholder = `data:image/jpeg;base64,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`
const maxDummyProducts = 2
const styles = {
  wrapper: 'text-align: center;',
  title: 'text-align: center; text-align: <%= alignment %>; color: <%= textColor %>; font-size: <%= fontSize %>px;',
  productRow: 'display: flex; justify-content: center; margin-bottom: 1rem;',
  product: 'display: flex; text-align: left; margin: auto;',
  productImageWrapper: 'display: flex; justify-content: center; width: 140px; height: 120px; overflow: hidden;',
  productImage: 'height: 100%;',
  detailsTable: 'width: 190px; margin-left: 10px; margin-bottom: 5px; border: none;',
  detailsTitle: 'color: <%= productNameColor %>; font-size: <%= productNameFontSize %>px; vertical-align: middle; text-align: left; font-weight: 600; border: none; padding: 5px;',
  detailsPrice: 'color: <%= productPriceColor %>; font-size: <%= productPriceFontSize %>px; vertical-align: middle; text-align: left; border: none; padding: 5px;'


}
let cartRecoveryTemplate = _.template(`
  <div style="${styles.wrapper}">
    <h1 style="${styles.title}"><%= titleText %></h1>
    {{#products}}
      <div style="${styles.productRow}">
        <div style="${styles.product}">
          <div style="${styles.productImageWrapper}">
            <img style="${styles.productImage}"
              src="{{ url }}" onerror="this.src='${imagePlaceholder}'"/>
          </div>
          <table style="${styles.detailsTable}">
            <tr>
              <td style="${styles.detailsTitle}">
              {{ title }}
              </td>
            </tr>
            <tr>
              <td style="${styles.detailsPrice}">
              {{ price }}
              </td>
            </tr>
          </table>
        </div>
      </div>
    {{/products}}
  </div>
`)

mockedCartRecoveryTemplate = _.template(`
<div style="${styles.wrapper}">
  <h1 style="${styles.title}"><%= titleText %></h1>
  <div style="${styles.productRow}">
    <div style="${styles.product}">
      <div style="${styles.productImageWrapper}">
        <img style="${styles.productImage}"
          src="{{ url }}" onerror="this.src='${imagePlaceholder}'"/>
      </div>
      <table style="${styles.detailsTable}">
        <tr>
          <td style="${styles.detailsTitle}">
          Product name
          </td>
        </tr>
        <tr>
          <td style="${styles.detailsPrice}">
          $100
          </td>
        </tr>
      </table>
    </div>
  </div>
  <div style="${styles.productRow}">
    <div style="${styles.product}">
      <div style="${styles.productImageWrapper}">
        <img style="${styles.productImage}"
          src="{{ url }}" onerror="this.src='${imagePlaceholder}'"/>
      </div>
      <table style="${styles.detailsTable}">
        <tr>
          <td style="${styles.detailsTitle}">
          Product name
          </td>
        </tr>
        <tr>
          <td style="${styles.detailsPrice}">
          $100
          </td>
        </tr>
      </table>
    </div>
  </div>
</div>
`)


unlayer.registerTool({
  name: 'cart_recovery',
  label: 'Cart Items',
  icon: 'https://s3.amazonaws.com/proof-factor-unlayer-email-images/1633089497459-unlayer-cart-icon.svg',
  supportedDisplayModes: ['web', 'email'],
  options: {
    default: {
      title: null,
    },
    title: {
      title: 'Title',
      position: 1,
      options: {
        titleText: {
          label: 'Title',
          defaultValue: 'You left something behind!',
          widget: 'text',
        },
        textColor: {
          label: 'Color',
          defaultValue: '#333333',
          widget: 'color_picker',
        },
        fontSize: {
          label: 'Font Size',
          defaultValue: '24',
          widget: 'counter',
        },
        alignment: {
          label: 'Text Alignment',
          defaultValue: 'center',
          widget: 'alignment',
        },
      },
    },
    // productConfigs: {
    //   title: 'Product Configuration',
    //   position: 1,
    //   options: {
    //     productQuantity: {
    //       label: 'The number of products to show',
    //       defaultValue: 4,
    //       widget: 'dropdown',
    //     },
    //   }
    // },
    productName: {
      title: 'Product Name',
      position: 1,
      options: {
        productNameColor: {
          label: 'Color',
          defaultValue: '#000',
          widget: 'color_picker',
        },
        productNameFontSize: {
          label: 'Font Size',
          defaultValue: '18',
          widget: 'counter',
        },
      },
    },
    productPrice: {
      title: 'Product Price',
      position: 1,
      options: {
        productPriceColor: {
          label: 'Color',
          defaultValue: '#f13b3b',
          widget: 'color_picker',
        },
        productPriceFontSize: {
          label: 'Font Size',
          defaultValue: '18',
          widget: 'counter',
        },
      },
    },
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        const data = values.data
        data.products = []
        for (let i = 0; i < maxDummyProducts; i++) {
          data.products.push({title: '{{ product.title }}', price: '{{ product.price }}'})
        }
        return Mustache.render(mockData ? mockedCartRecoveryTemplate(values) : cartRecoveryTemplate(values), data)
      },
    }),
    exporters: {
      web: function(values) {
        return mockData ? mockedCartRecoveryTemplate(values) : cartRecoveryTemplate(values)
      },
      email: function(values) {
        return mockData ? mockedCartRecoveryTemplate(values) : cartRecoveryTemplate(values)
      },
    },
    head: {
      css: function(values) {
      },
      js: function(values) {
      },
    },
  },
})
