//From React
import React,{ useEffect, useState} from 'react';
import Post from '../post/Post'
import Email from '../email/email'
import { Link } from 'react-router-dom';

import { QUERY_INBOX, QUERY_PROFILE } from '../../utils/queries'
import { useQuery } from '@apollo/client';


function Inbox(){

    const { loading, data } = useQuery(QUERY_INBOX)
    const inbox = data?.inbox || [];
    const profile = data?.profile || [];
    const [forward, setForward] = useState('');


    const handleforwardobj = (obj) => {
        setForward(obj)
    }
    
    

    
    return (
        <div>
            <Email forwardstring={forward}/>
            {inbox.map((emailobj, index) => (
                <Post
                senderfname={emailobj.sender.firstName} 
                senderlname={emailobj.sender.lastName} 
                senderemail={emailobj.sender.email}
                recipientfname={profile.firstName} 
                recipientlname={profile.lastName} 
                recipientemail={profile.email}
                senderid={emailobj.sender._id}
                subject={emailobj.subject}
                emailbody={emailobj.emailbody}
                sentDate={emailobj.sentDate}
                key={emailobj._id}
                forwardobj={handleforwardobj}/>
                
                ))}
        </div>
    )
}

export default Inbox