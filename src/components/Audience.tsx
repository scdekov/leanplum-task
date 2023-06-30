import { UserEntity, generateSampleData } from "../models/UsersEntity";
import { Component, Vue } from "vue-property-decorator";
import UserList from "./UserList";
import UserDetail from "./UserDetail";

@Component({})
export default class Audience extends Vue {
  users: UserEntity[] = [];
  selectedUser: UserEntity | null = null;

  created() {
    this.users = generateSampleData();
  }

  render() {
    return (
      <div class={"flex-row"}>
        <UserList
          users={this.users}
          onUserSelected={(u: UserEntity) => {
            this.selectedUser = u;
          }}
          selectedUserId={this.selectedUser?.id}
        />
        {this.selectedUser ? <UserDetail user={this.selectedUser} /> : null}
      </div>
    );
  }
}
