import Post from '../post/Post'

import {QUERY_SENTBOX} from '../../utils/queries'
import { useQuery } from '@apollo/client';

function Sentbox(){

    const { loading, data } = useQuery(QUERY_SENTBOX)
    const sentbox = data?.sentbox || [];
    console.log(sentbox);

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