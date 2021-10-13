let couponTemplate = _.template(`
    <div style="text-align: <%= alignment %>; color: <%= textColor %>; font-size: <%= fontSize %>px;">
      {{ coupon.code }}
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
        return couponTemplate(values)
      },
    }),
    exporters: {
      web: function(values) {
        return couponTemplate(values)
      },
      email: function(values) {
        return couponTemplate(values)
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
