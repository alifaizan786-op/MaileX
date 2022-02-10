import Post from '../post/Post'
import Email from '../email/email'

import { QUERY_SENTBOX, QUERY_PROFILE } from '../../utils/queries'
import { useQuery } from '@apollo/client';

function Sentbox(){

    const { loading, data } = useQuery(QUERY_SENTBOX)
    const sentbox = data?.sentbox || [];

    return (
        <div>
            {sentbox.map((emailobj, index) => (
                <Post 
                senderfname={emailobj.recipient.firstName} 
                senderlname={emailobj.recipient.lastName} 
                senderemail={emailobj.recipient.email}
                subject={emailobj.subject}
                emailbody={emailobj.emailbody}
                sentDate={emailobj.sentDate}  
                key={index}/>
                ))}
        </div>
    )
}

export default Sentbox