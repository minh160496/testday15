// Kiểm tra JavaScript cơ bản Mục tiêu: Ôn tập kiến thức và đánh giá kết quả học tập của học viên
// Nội dung: Bài kiểm tra bao gồm 10 bài tập lập trình JavaScript chủ đề khác nhau nhằm đánh giá kiến thức JavaScript căn bản
// Yêu cầu:
// Làm bài và nộp bài trong thời gian quy định (gửi link github)
// Comment trong code giải tích chi tiết cách làm (thuật toán, các bước, ...), và links
// tham khảo nếu có
// Chú ý không đổi tên hàm và giá trị trả về phải đúng định dạng/kiểu dữ liệu theo
// yêu cầu Nếu chỉ có bài làm mà không có giải thích (hoặc giải thích một kiểu làm một kiểu)
// thì coi như chưa hiểu bài, sẽ bị trừ 1/2 số điểm của bài
// Ví dụ:
/**
 * Tìm số nhỏ nhất trong mảng
 *
 * @param {number[]} arr - Mảng các số truyền vào
 * @return {number} - Số nhỏ nhất trong mảng
 * @example minOf([2, 5, 1, -1, 4]); // -1
 */
/**
 * Cách làm:
 * Bước 1: Khai báo biến min để giữ kết quả
 * Bước 2: Giả sử phần tử đầu tiên của mảng (arr[0]) là số nhỏ nhất, gán
cho min
 * Bước 3: Duyệt qua các giá trị (n) trong mảng
 * - Nếu min < n thì gán lại giá trị cho min
Bài tập
 * Bước 4: Trả về kết quả min
 */
function minOf(arr) {
  let min = arr[0];
  for (let n of arr) if (n < min) min = n;
  return min;
}
/**
 * Tính số tiền điện theo công thức tính giá điện bậc thang như sau:
 * - Từ kWh thứ 0 đến 50: 1678đ/kWh
 * - Từ kWh thứ 51 - 100: 1734đ/kWh
 * - Từ kWh thứ 101 - 200: 2014đ/kWh
 * - Từ kWh thứ 201 - 300: 2536đ/kWh
 * - Từ kWh thứ 301 - 400: 2834đ/kWh
 * - Từ kWh thứ 401 trở đi: 2927đ/kWh
 *
 * @param {number} kwh - Số điện đã dùng trong tháng
 *
 * @return {number} Tiền điện phải trả
 *
 * @example
//  * bill(100); // 170600
 */
function bill(kwh) {
  const a = 1678;
  const b = 1734;
  const c = 2014;
  const d = 2536;
  const e = 2834;
  const f = 2972;

  if (kwh <= 50) return kwh * a;
  if (kwh > 50 && kwh <= 100) return 50 * a + (kwh - 50) * b;
  if (kwh > 100 && kwh <= 200) return 50 * a + 50 * b + (kwh - 100) * c;
  if (kwh > 200 && kwh <= 300)
    return 50 * a + 50 * b + 100 * c + (kwh - 200) * d;
  if (kwh > 300 && kwh <= 400)
    return 50 * a + 50 * b + 100 * c + 100 * d + (kwh - 300) * e;
  if (kwh > 400 && kwh <= 400)
    return 50 * a + 50 * b + 100 * c + 100 * d + 100 * e + (kwh - 400) * f;
}

/**
 * Cho một chuỗi time biểu thị thời gian dạng giờ:phút:giây (VD:
'20:15:45'), và một số n bất kỳ, tính và trả về kết quả là một chuỗi
biểu thị thời gian tương ứng sau n giây
 *
 * @param {string} time - Chuỗi biểu thị thời gian
 * @param {number} n - Số giây cần thêm (bớt)
 *
 * @return {string} Kết quả
 *
 * @example
 * calcTime('20:15:45', 15); // '20:16:00'
 * calcTime('20:15:45', -46); // '20:14:59'
 */

//Ý TƯỞNG
//B1: LẤY RA CÁC GIÁ TRỊ GIỜ PHÚT GIÂY
//B2: XỬ LÝ (LƯU Ý MÔC 60)
function calcTime(time, n) {
  let gio = parseInt(time[0] + time[1]);
  let phut = parseInt(time[3] + time[4]);
  let giay = parseInt(time[6] + time[7]);
  if (giay + n < 60) {
    giay = giay + n;
  }
  if (giay + n >= 60) {
    let loop = (giay + n) / 60;
    phut = phut + Math.floor(loop);
    giay = giay + n - 60 * Math.floor(loop);
    if (phut >= 60) {
      gio = gio + Math.floor(phut / 60);
      phut = phut - 60 * Math.floor(phut / 60);
      if (gio >= 24) {
        gio = Math.floor(gio / 24) - 1;
      }
    }
  }
  return `${gio}:${phut}:${giay}`;
}

/**
 * Kiểm tra một chuỗi có phải đối xứng hay không (viết xuôi hay viết
ngược đều giống nhau, không phân biệt chữ hoa chữ thường và không tính
dấu cách)
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @return {boolean} Kết quả
 *
 * @example
 * isPalindrome('Race car'); // true, vì Race car = racecar = racecar
 */

//Ý TƯỞNG
//B1: XÓA KHOẢNG TRẴNG, QUY VỀ CHỮ THƯỜNG
//B2: CHUYỂN VỀ MẢNG
//B3: TẠO MẨNG ĐẢO NGƯỢC
//B4: SO SÁNH
function isPalindrome(str) {
  str = str.toLowerCase();
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") arr.push(str[i]);
  }

  let arr2 = [];
  for (let k in arr) {
    arr2[k] = arr[k];
  }

  let newArr = arr2.reverse();
  for (let j = 0; j < arr.length; j++) {
    if (newArr[j] != arr[j]) return false;
  }
  return true;
}

/**
 * Một con ốc sên leo từ đáy giếng lên miệng giếng, biết ban ngày leo
được x mét, ban đêm lại bị tụt xuống y mét, hỏi sau bao nhiêu ngày thì
ốc sên sẽ leo lên tới miệng giếng
 *
 * @param {number} h - Chiều cao của giếng (h > 0)
 * @param {number} x - Số mét leo được vào ban ngày (x > y)
 * @param {number} y - Số mét bị tụt xuống vào ban đêm (y > 0)
 *
 * @return {number} Số ngày cần để ốc sên leo lên được miệng giếng
 *
 * @example
 * snail(10, 3, 1); // 5
 */

//Ý TƯỞNG
// B1; TA CỨ CHO SỐ  MÉT ĐI ĐƯỢC 1 NGÀY CỦA CON ỐC LÀ X - Y
//B2: VÌ BAN NGÀY NẾU NÓ ĐÃ LÊN ĐƯỢC ĐẾN ĐỘ CAO H RỒI THÌ KHÔNG THỂ TRỪ LÙI ĐI QUÃNG ĐƯỢC THỤT LẠI BAN ĐÊM ĐƯỢC NÊN TA PHẢI KIỂM TRA BẦNG CÁCH (1)
//B3: IN RA KẾT QUẢ
function snail(h, x, y) {
  if (x >= h) {
    return 1;
  }
  let test = Math.ceil(h / (x - y));
  let test2 = 0;
  let test3 = 0;
  for (let i = 0; i < test; i++) {
    //(1): CÁCH KIỂM TRA XEM ĐẾN BUỔI BAN NGÀY CỦA NGÀY THỨ MẤY THÌ ỐC SÊN RA KHỎI RIẾNG
    test2 = (test - i) * (x - y) + x;
    if (test2 >= h) test3 = i;
  }
  return test - test3;
}

/**
 * Sắp xếp các chữ số trong một số nguyên dương bất kỳ để tạo ra số nhỏ
nhất (giữ nguyên số chữ số ban đầu, bao gồm cả số 0)
 *
 * @param {number} n - Số nguyên dương bất kỳ
 *
 * @return {number} Số nhất nhất sau khi sắp xếp các chữ số
 *
 * @example
 * sortNumber(5307510); // 1003557
 */

//Ý TƯỞNG
//B1: GÁN STRING THÀNH MẢNG
//B2: SẮP XẾP MẢNG THEO THỨ TỰ TĂNG DẦN
//B3: NẾU BẮT ĐẦU BẰNG SỐ 0 THÌ TÌM PHẦN TỬ CÓ GIÁ TRỊ NHỎ THỨ 2 CỦA MẢNG VÀ HOÁN ĐỔI VỊ TRÍ VỚI PHÂN TỬ CÓ GIÁ TRỊ 0
//B3: XONG
function sortNumber(n) {
  let nString = n.toString();
  let result;
  let arr = [];
  for (let i = 0; i < nString.length; i++) {
    arr[i] = Number.parseInt(nString[i]);
  }
  arr.sort();
  if (arr[0] === 0) {
    var note = arr[1];
    arr[0] = note;
    arr[1] = 0;
    console.log(arr);
  }

  result = Number.parseInt(arr.join(""));
  return result;
}

/**
 * Đếm số lần xuất hiện của mỗi phần tử trong mảng, nếu là chuỗi thì
không phân biệt chữ hoa chữ thường
 *
 * @param {any[]} arr - Mảng chứa giá trị bất kỳ
 *
 * @return {Record<string, number>} object chứa kết quả, với key là giá
trị trong mảng và value là số lần xuất hiện trong mảng
 *
 * @example
 * let result = countElement([1, true, 1, 1, true]);
 * console.log(result); // {1: 3, true: 2}
 *
 * @example
 * let result = countElement(['Ba', 'Béo', 'Ba']);
 * console.log(result); // {ba: 2, béo: 1}
 */

//ý TƯỞNG
//B1: LẤY TỪNG GIÁ TRỊ CỦA MẢNG SO SÁNH VỚI CÁC PHẦN TỬ CÒN LẠI, SO SÁNH ĐẾN ĐÂU THÌ GÁN CHO PHẦN TỬ ĐÓ GIÁ TRỊ undefined
//B2: TẠO RA MẢNG COUNT LƯU SỐ LẦN XUẤT HIỆN
//      TẠO MẢNG VALUEOF LƯU CÁC PHẦN TỬ KHÔNG BỊ LẶP LẠI CỦA MẢNG
//B3; OBJECT CUỐI CÙNG CÓ KEY LÀ PHẦN TỬ THUỘC VALUEOF VÀ VALUE LÀ PHẦN TỬ THUỘC COUNT VỚI INDEX GIỐNG NHAU
function countElement(arr) {
  let obj = {};
  let count = [];
  let valueOf = [];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] != undefined) {
      count[j] = 1;
      valueOf[j] = arr[j];
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[j] === arr[k]) {
          count[j]++;
          delete arr[j];
          delete arr[k];
        }
      }
    }
  }
  for (let i = 0; i < count.length; i++) {
    obj[valueOf[i]] = count[i];
  }
  return obj;
}

countElement(["Ba", "Béo", "Ba"]);
/**
 * Object chứa thông tin về sinh viên
 *
 * @typedef {Object} Student
 * @property {number} id - ID duy nhất của sinh viên
 * @property {string} name - Tên sinh viên
 * @property {string} dateOfBirth - Ngày sinh
 * @property {number} grade - Điểm tốt nghiệp
 */
/**
 * Sắp xếp danh sách sinh viên dựa theo:
 * - Điểm tốt nghiệp theo thứ tự giảm dần
 * - Nếu sinh viên có điểm tốt nghiệp bằng nhau thì sắp xếp theo thứ tự
ngày sinh tăng dần
 * - Nếu ngày sinh cũng giống nhau thì sắp xếp theo tên (bảng chữ cái)
 *
 * Kết quả trả về phải là một mảng mới, không thay đổi mảng cũ
 *
 * @param {Student[]} students - Mảng chứa thông tin sinh viên
 *
 * @return {Student[]} Danh sách sinh viên sau khi sắp xếp
 *
 * @example
 * let students = [
 * { id: 1, name: "Ba Nguyễn", dateOfBirth: '1992-05-24', point: 10.0
},
 * { id: 2, name: "Tuấn Anh", dateOfBirth: '1993-10-29', point: 4.5 },
 * { id: 3, name: "Tuấn Vũ", dateOfBirth: '1996-03-13', point: 8.2 },
 * { id: 4, name: "Minh Vân", dateOfBirth: '1996-03-31', point: 7.0 },
 * { id: 5, name: "Phương Thảo", dateOfBirth: '1999-05-15', point: 9.0
},
 * { id: 6, name: "Mai Anh", dateOfBirth: '1994-08-22', point: 4.5 },
 * { id: 7, name: "Thanh Hà", dateOfBirth: '1996-03-31', point: 7.0 },
 * { id: 8, name: "Hoàng Linh", dateOfBirth: '1991-07-01', point: 7.2
},
 * { id: 9, name: "Lan Nhi", dateOfBirth: '1990-09-10', point: 5.5 },
 * ]
 *
 * sortStudents(students);
 *
 * // Kết quả
 * [
 * // sắp xếp theo điểm
 * { id: 1, name: "Ba Nguyễn", dateOfBirth: '1992-05-24', point: 10.0
},
 * { id: 5, name: "Phương Thảo", dateOfBirth: '1999-05-15', point: 9.0
},
 * { id: 3, name: "Tuấn Vũ", dateOfBirth: '1996-03-13', point: 8.2 },
 * { id: 8, name: "Hoàng Linh", dateOfBirth: '1991-07-01', point: 7.2
},
 * // điểm bằng nhau, sắp xếp theo ngày sinh
 * { id: 7, name: "Thanh Hà", dateOfBirth: '1996-02-16', point: 7.0 },
 * { id: 4, name: "Minh Vân", dateOfBirth: '1993-03-31', point: 7.0 },
 * // sắp xếp theo điểm
 * { id: 9, name: "Lan Nhi", dateOfBirth: '1990-09-10', point: 5.5 },
 * // điểm bằng nhau, ngày sinh giống nhau, sắp xếp theo tên
 * { id: 6, name: "Mai Anh", dateOfBirth: '1996-03-31', point: 4.5 },
 * { id: 2, name: "Tuấn Anh", dateOfBirth: '1996-03-31', point: 4.5 },
 * ]
 */
function sortStudents(students) {
  //coppy mảng
  let newStudents = [];
  for (let i = 0; i < students.length; i++) {
    newStudents[i] = students[i];
  }
  //sort theo tên
  newStudents.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  //sort theo ngày sinh
  newStudents.sort((a, b) => b.dateOfBirth - a.dateOfBirth);

  //sort theo điểm
  newStudents.sort((a, b) => b.grade - a.grade);

  return newStudents;
}
