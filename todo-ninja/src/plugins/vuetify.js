import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.purple,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        background: colors.grey,
        // complete: '#57BF42',
        // inprogress: "#FFBF42",
        // notstarted: colors.grey,
        // overdue: "#FF4242",
      },
    },
  },
});
