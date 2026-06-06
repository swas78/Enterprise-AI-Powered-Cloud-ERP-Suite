export class CommonValidators {
  public static isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  public static isValidObjectId(id: string): boolean {
    const regex = /^[0-9a-fA-F]{24}$/;
    return regex.test(id);
  }
}

export default CommonValidators;
