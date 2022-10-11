export const quizAndData = async({params})=>{
    const quizeId = await fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
    const quiz = quizeId.json()
    return quiz 
    // console.log(quiz)
}