/* Birth certificate of this JS

name project : top score in school
---------------------------------------------------
date : 2023 22 Dec
---------------------------------------------------
team developers : nazanin sharifi , tahereh safary
---------------------------------------------------
contant wiht gmail : mikaelasharifi45@gmail.com

*/
let school = [
    // class 1
    {
        info: {
            totalStudent: 4,
            teacherNeam: "khateri",
            classNeme: "Web Design"
        },

        students: [
            // std 1
            {
                name: "nazanin",
                score: 20,
                codeMali: 3550210150
            },
            // std 2
            {
                name: "tahereh",
                score: 19,
                codeMali: 63948574617

            },
            // std 3
            {
                name: "raheleh",
                score: 19.5,
                codeMali: 9592686562
            },
            // sdt 4
            {
                name: "maedeh",
                score: 16,
                codeMali: 3965487215
            }
        ]
    },
    // class 2
    {}
]

//stp1= magmo scores ro zakhire kon
sum = 0;

// stp2= be tedad tol array school[0].students tekrar sho
for (i = 0; i < school[0].students.length; i++) {

    //stp3= array school[0].students[i] ro ty kon v score har student ro be sum azafe kon
    sum += school[0].students[i].score

}

//stp4= sum ro chap kon 
console.log("مجموع نمرات دانش موزان کلاس : " + sum)

// sum ro bar tedad tol array school[0].students taghsim kon 
Average = sum / school[0].students.length;

// Average score students ro chap kon
console.log("میانگین نمرات دانش موزان کلاس : " + Average)



