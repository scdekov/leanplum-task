import { Component, Vue } from "vue-property-decorator";
import Audience from "../components/Audience";

import "./Audiences.scss";

@Component({})
export default class Audiences extends Vue {
  render() {
    return <Audience />;
  }
}
