
import getCookie from "./getCookie"
import manageError from "../Error_controlReact/manageErrors";

export default async function FetchCall(url,method,body,content_Type='application/json')
{

    let req_obj={

        mode: 'cors', //just a safe-guard indicating our intentions of what to allow
        credentials: 'include', //when will the cookies and authorization header be sent

        method: method,
        cache: 'force-cache',
        headers: {
            'Content-Type': content_Type,
            'X-CSRFToken': getCookie('csrftoken')
        },
         }
        if (body !== false)
        {
            req_obj.body= JSON.stringify(body)
            console.log("out")
        }

    let req = new Request(url, req_obj);
    return await fetch(req)
        // .then(manageError)
        .then(
            ev => ev.json()
        )

}





 async function FetchCall_success_failure_Key(
                                             url,method,body,successFunc=false,FailureFunc=false
                                            ,success=["success"],
                                            Failure=["success"],
                                             )
 {

    let response=await FetchCall(url, method, body);
    // console.log(response)

     let response_up=false
    success.forEach(ev=>{

        if (Reflect.has(response,ev))
        {
            // console.log("in success",successFunc)
            if (successFunc === false)
            {

                // console.log("in success222")
                response_up={response:response,type:true}

            }
            else
            {
                // console.log("in success1111")

                response_up=successFunc(response)
            }

        }
    })

     if (response_up === false) {
         Failure.forEach(ev => {

             if (Reflect.has(response, ev)) {
                 if (FailureFunc === false) {
                     response_up={response: response, type: false}

                 } else {
                    // console.log("failure func")
                    response_up = FailureFunc(response)
                 }
             }
         })

     }
     // console.log(response_up)
     return response_up
}





export { FetchCall_success_failure_Key as  FetchCallSFK }