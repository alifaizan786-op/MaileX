import Post from '../post/Post'
import Email from '../email/email'
import { useParams } from 'react-router-dom';
import { QUERY_CHAT } from '../../utils/queries'
import { useQuery } from '@apollo/client'


function Chat(){
    const { id } = useParams();
    const senderid = id
    const recipientid = id

    const { loading, data } = useQuery(QUERY_CHAT, {
        variables: { otherperson:id},
      });

    const sentraw = data?.sent || []
    
    const recievedraw = data?.recieved || [{sender:''}]   
    
    const to = recievedraw[0].sender.email || ''

    let chat = []

    if(sentraw){
        for (let i = 0; i < sentraw.length; i++){
            chat.push(sentraw[i])
        }
    }

    if(recievedraw){
        for (let i = 0; i < recievedraw.length; i++){
            chat.push(recievedraw[i])
        }
    }

    return (
        <div>
            <Email totextbox={to}/>
            {chat.map((emailobj, index) => (
                <Post 
                senderfname={emailobj.sender.firstName} 
                senderlname={emailobj.sender.lastName} 
                senderemail={emailobj.sender.email}
                senderid={emailobj.sender._id}
                subject={emailobj.subject}
                emailbody={emailobj.emailbody}
                sentDate={emailobj.sentDate}  
                key={index}/>
                ))}
        </div>
    )
}

export default Chat