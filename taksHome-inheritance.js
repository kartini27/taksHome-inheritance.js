  
class Person {
    constructor(nama = '', NIK = 0, jenisKelamin = '') {
      this.nama = nama;
      this.NIK = NIK;
      this.jenisKelamin = jenisKelamin;
    }
  
    setNama(nama) {
      this.nama = nama;
    }
  
    setNIK(NIK) {
      this.NIK = NIK;
    }
  
    setJenisKelamin(jenisKelamin) {
      this.jenisKelamin = jenisKelamin;
    }
  
    getNama() {
      return this.nama;
    }
  
    getNIK() {
      return this.NIK;
    }
  
    getJenisKelamin() {
      return this.jenisKelamin;
    }
  }
  
  class Employee extends Person {
    constructor(
      nama = '',
      NIK = 0,
      jenisKelamin = '',
      pekerjaan = '',
      salary = 0
    ) {
      super(nama, NIK, jenisKelamin);
      this.pekerjaan = pekerjaan;
      this.salary = salary;
    }
  
    setPekerjaan(pekerjaan) {
      this.pekerjaan = pekerjaan;
    }
  
    setSalary(salary) {
      this.salary = salary;
    }
  
    getPekerjaan() {
      return this.pekerjaan;
    }
  
    getSalary() {
      return this.salary;
    }
  }
  
  class Student extends Person {
    constructor(
      nama = '',
      NIK = 0,
      jenisKelamin = '',
      kampus = '',
      jurusan = ''
    ) {
      super(nama, NIK, jenisKelamin);
      this.kampus = kampus;
      this.jurusan = jurusan;
    }
  
    setKampus(kampus) {
      this.kampus = kampus;
    }
  
    setJurusan(jurusan) {
      this.jurusan = jurusan;
    }
  
    getKampus() {
      return this.kampus;
    }
  
    getJurusan() {
      return this.jurusan;
    }
  }
  
  console.log('\n=== Employe ===');
  const artis = new Employee(
    'Angnes mo ',
    892002044502,
    'wanita',
    'Penyanyi bolywood',
    5_000_000_000
  );
  console.log('Nama :', artis.getNama());
  console.log('NIK :', artis.getNIK());
  console.log('Jenis Kelamin :', artis.getJenisKelamin());
  console.log('Pekerjaan :', artis.getPekerjaan());
  console.log('Gaji :', artis.getSalary());
  
  console.log('\n=== Student ===');
  const student = new Student(
    'kartini',
    200020407992567,
    'perempuan',
    'Universitas indonesia',
    'ekonomi bisnis'
  );
  console.log('Nama :', student.getNama());
  console.log('NIK :', student.getNIK());
  console.log('Jenis Kelamin :', student.getJenisKelamin());
  console.log('kampus :', student.getKampus());
  console.log('jurusan:', student.getJurusan());