

export const postData = async(data) => {
 try {
    let res = await fetch('https://blue-mercury-3qiw.onrender.com/todos',{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
             "Content-Type" : 'application/json',
        },
    })
 } catch (error) {
    console.log(error)
 }
}
