import { Component, Vue } from "vue-property-decorator";

import "./Divider.scss";

@Component({})
export default class Divider extends Vue {
  render() {
    return <div class={"divider"}></div>;
  }
}
