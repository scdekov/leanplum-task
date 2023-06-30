import { UserEntity } from "../models/UsersEntity";
import { Component, Prop, Vue } from "vue-property-decorator";
import { format } from "date-fns";
import "./UserDetail.scss";
import { DATE_TIME_FORMAT } from "../constants";

@Component({})
export default class UserDetails extends Vue {
  @Prop({ required: true }) readonly user!: UserEntity;

  render() {
    return (
      <div class={"flex-column user-detail-container user-detail-section"}>
        <div class={"text-left user-detail-header user-detail-section"}>
          <div class={"title"}>{this.user.id}</div>
          <div class={"subtitle"}>
            {format(this.user.created, DATE_TIME_FORMAT)} - {this.user.location}
          </div>
        </div>
        <div class={"flex-column user-detail-section"}>
          <div class={"flex-row flex-space-between flex-gap-2 text-left"}>
            <div class={"user-detail-tile"}>
              <p class={"title"}>Devices</p>
              <p class={"value"}>{this.user.devices}</p>
            </div>
            <div class={"user-detail-tile"}>
              <p class={"title"}>Sessions</p>
              <p class={"value"}>{this.user.sessions.length}</p>
            </div>
            <div class={"user-detail-tile"}>
              <p class={"title"}>Events</p>
              <p class={"value"}>{this.user.events}</p>
            </div>
          </div>
        </div>
        <table class={"user-detail-section user-detail-attributes text-left"}>
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.user.attributes).map(key => (
              <tr key={key}>
                <td>{key}</td>
                <td>{this.user.attributes[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
