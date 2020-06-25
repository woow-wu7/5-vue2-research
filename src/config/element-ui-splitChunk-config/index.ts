import Vue from 'vue'
import { Button, Select, Option, OptionGroup } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Button)
Vue.use(Select)
Vue.use(Option);
Vue.use(OptionGroup);

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };