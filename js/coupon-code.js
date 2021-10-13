let mockData = typeof _mockMarker !== 'undefined'

let couponTemplate = _.template(`
    <div style="text-align: <%= alignment %>; color: <%= textColor %>; font-size: <%= fontSize %>px;">
      {{ coupon.code }}
    </div>
`)

let mockedCouponTemplate = _.template(`
    <div style="text-align: <%= alignment %>; color: <%= textColor %>; font-size: <%= fontSize %>px;">
      GKBCREQR8634
    </div>
`)


unlayer.registerTool({
  name: 'coupon_code',
  label: 'Coupon',
  // icon: 'fa-percent',
  icon: 'https://cdn.prooffactor.com/assets/images/unlayer-coupon-icon.svg',
  supportedDisplayModes: ['web', 'email'],
  options: {
    default: {
      title: null,
    },
    text: {
      title: 'Text',
      position: 1,
      options: {
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
        // fontFamily: {
        //   label: 'Font',
        //   defaultValue: {
        //     label: 'Arial',
        //     value: 'arial,helvetica,sans-serif'
        //   },
        //   widget: 'font_family',
        // }
      },
    }
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        return mockData ? mockedCouponTemplate(values) : couponTemplate(values)
      },
    }),
    exporters: {
      web: function(values) {
        return mockData ? mockedCouponTemplate(values) : couponTemplate(values)
      },
      email: function(values) {
        return mockData ? mockedCouponTemplate(values) : couponTemplate(values)
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
