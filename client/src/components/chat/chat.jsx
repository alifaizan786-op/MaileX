import Post from '../post/Post'
import Email from '../email/email'
import { useParams } from 'react-router-dom';
import { QUERY_CHAT } from '../../utils/queries'
import { useQuery } from '@apollo/client'


function Chat(){
    const { id: chatid } = useParams();
    const senderid = chatid
    const recipientid = chatid

    const { loading, data } = useQuery(QUERY_CHAT, {
        variables: { senderid:chatid, recipientid:chatid },
      });
    console.log(data);
    return (
        <div>
            {/* <Email/>
            {inbox.map((emailobj, index) => (
                <Post 
                senderfname={emailobj.sender.firstName} 
                senderlname={emailobj.sender.lastName} 
                senderemail={emailobj.sender.email}
                subject={emailobj.subject}
                emailbody={emailobj.emailbody}
                sentDate={emailobj.sentDate}  
                key={index}/>
                ))} */}
        </div>
    )
}

export default Chat