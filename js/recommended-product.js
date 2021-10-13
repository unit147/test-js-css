let pf_recommended_product = `text-align: <%= productAlign %>;`;
let pf_recommended_product_link = `text-decoration: none; color: black;display: inline-block; text-align: center; width: 140px; margin: 0 5px;`;
let pf_recommended_product_img = `height: auto; width: 140px; display: block; font-size: 0;`;
let pf_recommended_product_label = `font-size: 16px; display: inline-block;`;
let pf_recommended_product_price = `font-size: 12px; display: inline-block;`;

/* 
  CSS classes DO NOT WORK in every email client! DO NOT use that. As well as flex, grid or any other fancy CSS3 feature, unless you have a fallback
*/

let commonTemplate = _.template(`
    <div style="${pf_recommended_product}">
      {{#products}}
      <div style="margin-bottom: 15px;">
        <a style="${pf_recommended_product_link}" href="{{url}}" target="_blank">
          <% if (includeImage === true) { %>
            <span style="${pf_recommended_product_img}"><img src="{{image}}" width="100%"></span>
          <% } %>
          <% if (includeLabel === true) { %>
            <span style="${pf_recommended_product_label}">{{name}}</span>
          <% } %>
          <% if (includePrice === true) { %>
            <span style="${pf_recommended_product_price}">{{price}}</span>
          <% } %>
        </a>
      </div>
      {{/products}}
    </div>
`)

unlayer.registerTool({
  name: 'recommended_product',
  label: 'Recommended product',
  icon: 'fa-shopping-basket',
  supportedDisplayModes: ['web', 'email'],
  options: {
    default: {
      title: null,
    },
    productConfigs: {
      title: 'Product Configurations',
      position: 1,
      options: {
        productQuantity: {
          label: 'Products Quantity in Template',
          defaultValue: 1,
          widget: 'dropdown',
        },
        productAlign: {
          label: 'Product Align',
          defaultValue: 'center',
          widget: 'dropdown',
        },
        includeImage: {
          label: 'Include Image',
          defaultValue: true,
          widget: 'toggle',
        },
        includeLabel: {
          label: 'Include Label',
          defaultValue: true,
          widget: 'toggle',
        },
        includePrice: {
          label: 'Include Price',
          defaultValue: true,
          widget: 'toggle',
        },
      },
    },
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        const data = values.data
        data['products'] = data.products.slice(0, values.productQuantity)
        return Mustache.render(commonTemplate(values), data)
      },
    }),
    exporters: {
      web: function(values) {
        return commonTemplate(values)
      },
      email: function(values) {
        return commonTemplate(values)
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
