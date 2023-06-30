import { UserEntity } from "src/models/UsersEntity";
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import "./UserList.scss";
import Divider from "./common/Divider";

@Component({})
export default class UserList extends Vue {
  @Prop({ required: true }) readonly users!: Array<UserEntity>;
  @Prop() readonly selectedUserId!: string;

  @Emit("userSelected")
  onUserSelected(user: UserEntity) {
    return user;
  }

  render() {
    return (
      <div class={"users-list"}>
        <div class={"user-list-header"}>
          <div class={"title"}>Users in Audience</div>
          <div class={"subtitle"}>Total Users - Showing {this.users.length} matching users</div>
        </div>
        <Divider />
        <div>
          {this.users.map(user => (
            <div
              class={{ selected: this.selectedUserId === user.id, "user-list-item": true }}
              onClick={() => this.onUserSelected(user)}
              key={user.id}
            >
              <div class={"title"}>{user.id}</div>
              <div class={"subtitle"}>
                {user.devices} Devices - {user.sessions.length} Sessions - {user.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
