// 1.Obyekt yaradin.

// let person={
//     ad:'Firuze',
//     soyad:'Mehdiyeva',
//     yas:19,
//     email:'mehdiyevafiruze06@gmail.com',
//     ixtisas:'Komputer muhendisliyi'
// };

// console.log(person.ad);
// console.log(person.soyad);
// console.log(person.yas);
// console.log(person.email);
// console.log(person.ixtisas);




// 2.Array icinde coxlu obyektler yaradin.

// let students=[
//     {
//         ad:"Firuze",
//         soyad:"Mehdiyeva",
//         yas:19
//     },
//     {
//         ad:"Ibrahim",
//         soyad:"Quliyev",
//         yas:23
//     },
//     {
//         ad:"Fidan",
//         soyad:"Valiyeva",
//         yas:20
//     },
//     {
//         ad:"Sehla",
//         soyad:"Bagirova",
//         yas:24
//     },
//     {
//         ad:"Turqay",
//         soyad:"Bagirov",
//         yas:25
//     },
//     {
//         ad:"Turay",
//         soyad:"Zeynalova",
//         yas:20
//     }
// ];
// console.log(students[0].ad);
// console.log(students[0].soyad);
// console.log(students[0].yas);



// 3.Telebeler obyektinde bir nece telebe elave edin. Hobbileri, xususiyettleri kimi icerisindede deyerleri qeyd edin.

// let telebeler=[
//     {
//         ad:"Fatimə",
//         soyad:"Mustafayeva",
//         yas:19,
//         hobiler:['muzik dinləmek','kitab oxumaq'],
//         xususiyyet:['gozəl','şirin']
            
//     },
//     {
//         ad:"Ibrahim",
//         soyad:"Quliyev",
//         yas:23,
//         hobiler:['qitar calmaq','kitab oxumaq'],
//         xususiyyetleri:['yarasiqli','savadli']
//     },
//     {
//         ad:"Fidan",
//         soyad:"Vəliyeva",
//         yas:20,
//         hobiler:['rəsim cəkmək','valeybol oynamaq'],
//         xususiyyetleri:['agilli','gozəl']
//     },
//     {
//         ad:"Şəhla",
//         soyad:"Bagirova",
//         yas:24,
//         hobiler:['muzik dinləmek','tenis oynamaq'],
//         xususiyyetleri:['savadli','gozəl']
//     }
// ];
// console.log(telebeler[0].ad);
// console.log(telebeler[0].soyad);
// console.log(telebeler[0].yas);
// console.log(telebeler[0].hobiler);
// console.log(telebeler[0].xususiyyet);

//4.Students arrayinin qiymet ortalamasini cixardin. (Butun telebelerin qiymetlerini alib sayini bolun.

// let students = [
//     {
//     ad: "Firuze", 
//     soyad: "Mehdiyeva",
//     qiymet: 96 
//     },
//     {
//      ad: "Ibrahim",
//      soyad: "Quliyev",
//      qiymet: 80
//     },
//     {
//      ad: "Fidan", 
//      soyad: "Valiyeva",
//      qiymet: 94
//      },
//     { 
//     ad: "Sehla", 
//     soyad: "Bagirova", 
//     qiymet: 89
//      },
//     {
//      ad: "Turqay", 
//      soyad: "Bagirov",
//      qiymet: 95
//     },
//     { 
//         ad: "Turay",
//         soyad: "Zeynalova",
//         qiymet: 80 
//     }
// ];
// let cemqiymet = students.reduce((cem,students) => cem + students.qiymet,0);{
// students.length=6;
// let ortalamaqiymet = cemqiymet /6;
// console.log("telebelerin ortalama qiymeti ",ortalamaqiymet);
// }


//5.Qiymeti 90-dan az olan telebeleri Ad ve Soyadi ile birlikde ekrana cixardib onlara xeberdarliq edin.

// let students= [
//         {
//             ad:"Firuze",
//             soyad:"Mehdiyeva",
//             qiymət:90
//         },
//         {
//             ad:"Ibrahim",
//             soyad:"Quliyev",
//             qiymət:85
//         },
//         {
//             ad:"Fidan",
//             soyad:"Valiyeva",
//             qiymət:94
//         },
//         {
//             ad:"Sehla",
//             soyad:"Bagirova",
//              qiymət:89
//         },
//         {
//             ad:"Turqay",
//             soyad:"Bagirov",
//             qiymət:90
//         },
//         {
//             ad:"Turay",
//             soyad:"Zeynalova",
//            qiymət:80
//         }
//     ];
//     for( i=0;i<students.length; i++){
//        if(students[i].qiymət<=90){
//         console.log(students[i].ad ,  students[i].soyad +"qiymetiniz 90 dan azdi diqqet edin.");
//        }
//     }

