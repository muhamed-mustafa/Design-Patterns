class UserInfo {
  constructor(
    public email: string,
    public username: string,
    public phone?: string,
    public address?: string
  ) {}
}

class UserBuilder {
  user: UserInfo;

  constructor(email: string, username: string) {
    this.user = new UserInfo(email, username);
  }

  setPhone(phoneNumber: string) {
    this.user.phone = phoneNumber;
    return this;
  }

  setAddress(address: string) {
    this.user.address = address;
    return this;
  }
}

const user = new UserBuilder('mo@gmail.com', 'mo')
  .setPhone('0123456789')
  .setAddress('Egypt');

console.log(user);
