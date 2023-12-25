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
                score: 15,
                codeMali: 63948574617

            },
            // std 3
            {
                name: "raheleh",
                score: "19.5",
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

//stp1= majmo scores ro zakhire kon
sum = 0;

// stp2= be tedad tool array school[0].students tekrar sho
for (i = 0; i < school[0].students.length; i++) {

    //stp3= array school[0].students[i] ro tey kon va score har student ro be sum azafe kon

    if (typeof (school[0].students[i].score) == "number") {

        if (typeof (sum) != "number") {

            sum = 0
            sum += school[0].students[i].score

        }
        else {
            sum += school[0].students[i].score
        }
    }

    //stp4= type score string ro be int tabdil kon va be sum ezafe kon
    else if (typeof (school[0].students[i].score) != "number") {

        x = Number(school[0].students[i].score)

        sum += x

    }
}

console.log(school[0].info.classNeme + " : مشخصات کلاس")

//stp4= sum ro chap kon 
console.log("مجموع نمرات دانش موزان کلاس : " + sum)

// sum ro bar tedad tool array school[0].students taghsim kon 
Average = sum / school[0].students.length;

// Average score students ro chap kon
console.log("میانگین نمرات دانش موزان کلاس : " + Average)


// ==================================================================================

//stp1= top score ro dar max zakhire kon
let max = Number(school[0].students[0].score);

//stp2= name top student class ro dar nameTop zakhire kon
let nameTop = school[0].students[0].name;

//stp3= tool array ro tey kon
for (let i = 0; i < school[0].students.length; i++) {

    //stp4= top score va name top student ro peyda va zakhire kon
    if (max < school[0].students[i].score) {
        max = school[0].students[i].score
        nameTop = school[0].students[i].name;
    }

}

//stp5= top score va name top student ro chap kon
console.log(nameTop + " : دانش اموز نمره برتر کلاس ")
console.log("با نمره : " + max)


// ==================================================================================

//stp1= kamtarin score ro dar min zakhire kon
let min = Number(school[0].students[0].score);

//stp2= name student pashmake class ro dar namePashmak zakhire kon
let namePashmak = school[0].students[0].name;

//stp3= tool array ro tey kon
for (let i = 0; i < school[0].students.length; i++) {

    //stp4= kamtarin score va name student pashmak ro peyda va zakhire kon
    if (min > school[0].students[i].score) {
        min = school[0].students[i].score
        namePashmak = school[0].students[i].name;
    }

}


//stp5= kamtarin score va name student pashmak ro chap kon
console.log(namePashmak + " : دانش اموز نمره پشمک کلاس ")
console.log("با نمره : " + min)



