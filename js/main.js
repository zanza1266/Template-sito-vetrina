
const vm = new Vue ({
  el: '#root',
  data: {
    headerNavLinks: ['Home', 'About us', 'Features', 'Testimonials', 'Contact US'],
    footerMenuLinks: ['About Us', 'Theme', 'Features', 'Pricing', 'Blog'],
    footerAboutLinks: ['About Us', 'Theme', 'Features', 'Pricing', 'Blog'],
    footerQuickLinks: ['About Us', 'Theme', 'Features', 'Pricing', 'Blog'],
  },
  mounted() {

    window.onscroll = function() {

      let btn = document.getElementById('scroll');

      num = Math.round(window.pageYOffset)

      if (num < 4000) {
        btn.classList.add('none');
      } else {
        btn.classList.remove('none');
      }
    };
  },
  methods: {
    backToTop: function () {

      window.scrollTo(0, 0);
    }
  }
});
