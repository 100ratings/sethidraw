// Gerenciador de Licenças (Desativado)
class LicenseManager {
  constructor() {
    this.token = 'active';
    this.deviceId = 'universal';
    this.isActivated = true;
    this.customerName = 'Usuário';
  }
  async checkActivation() { return true; }
  async activate() { return { success: true }; }
  clearActivation() {}
  getCustomerName() { return this.customerName; }
}
const licenseManager = new LicenseManager();
