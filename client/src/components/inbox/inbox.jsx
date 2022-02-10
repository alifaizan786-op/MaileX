import Post from '../post/Post'
import Email from '../email/email'

import { QUERY_INBOX, QUERY_PROFILE } from '../../utils/queries'
import { useQuery } from '@apollo/client';


function Inbox(){

    const { loading, data } = useQuery(QUERY_INBOX)
    const inbox = data?.inbox || [];
    return (
        <div>
            <Email/>
            {inbox.map((emailobj, index) => (
                <Post 
                senderfname={emailobj.sender.firstName} 
                senderlname={emailobj.sender.lastName} 
                senderemail={emailobj.sender.email}
                subject={emailobj.subject}
                emailbody={emailobj.emailbody}
                sentDate={emailobj.sentDate}  
                key={index}/>
                ))}
                {inbox.map((emailobj, index) => (
                <Post 
                senderfname={emailobj.sender.firstName} 
                senderlname={emailobj.sender.lastName} 
                senderemail={emailobj.sender.email}
                subject={emailobj.subject}
                emailbody={emailobj.emailbody}
                sentDate={emailobj.sentDate}  
                key={index}/>
                ))}
        </div>
    )
}

export default Inbox