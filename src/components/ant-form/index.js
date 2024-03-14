import AntRadio from './ant-radio.vue'
import AntCheckbox from './ant-checkbox.vue'
import AntDate from './ant-date.vue'
import AntMonth from './ant-month.vue'
import AntRange from './ant-range.vue'
import AntWeek from './ant-week.vue'
import AntInput from './ant-input.vue'
import AntNumber from './ant-number.vue'
import AntSelect from './ant-select.vue'

const install = Vue => {
    Vue.component("AntRadio", AntRadio);
    Vue.component("AntCheckbox", AntCheckbox);
    Vue.component("AntDate", AntDate);
    Vue.component("AntMonth", AntMonth);
    Vue.component("AntRange", AntRange);
    Vue.component("AntWeek", AntWeek);
    Vue.component("AntInput", AntInput);
    Vue.component("AntNumber", AntNumber);
    Vue.component("AntSelect", AntSelect);
}

export default install