import "./post.css"
import {MoreVert,Reply,Forward,Delete} from "@mui/icons-material"
import { grid } from "@mui/system";



export default function Post(post) {
  return (
    <div className="post">
        <div className="postWrapper">

        <div className="postTop">
        <div className="postTopLeft">
        <img src="https://raw.githubusercontent.com/alifaizan786-op/Full_Stack_Portfolio/main/assets/images/placeholder.png" alt="" className="postProfileImg" />
                <div>
                <div>
        <span className="postUsername">Farid Virani (Iruna Digital) </span>
                </div>
                <div>
        <span className="postEmail">
        <span className="postDate">Farid Virani</span>
        &lt;mharriston@mitre.org&gt;
        <span className="postDate">. 23h</span></span>
                </div>
                </div>
                </div>
        <div className="postTopRight"><MoreVert/></div>
        </div>
        <div className="postCenter">
               {/* <img src="assets\post\1.jpeg" alt="" className="postImg" /> */}
        <p className="postText">
            Google Doodle honouring Parween  Rahman on her birthday. Rahman was a social activist and director of the Orangi Pilot Project Research and Training Institute. She was murdered on 13 March 2013.
            #GoogleDoodle
          </p>       
        <hr className="postHr" /> 
        </div>  
        
        <grid item xs={12}  container spacing={2} className="postBottom">
            
            <div item xs={4}className="postBottomLeft">
              <span className="postIcon"><Reply/></span>
               <span className="postLikeCounter">Reply</span>
            </div>
            <div className="postBottomLeft">
                <span className="postIcon"><Forward/></span>
                <span className="postCommentText">Forward</span>
            </div>
            <div className="postBottomLeft">
            <span className="postIcon"><Delete/></span> 
                <span className="postCommentText">Delete</span>
            </div>
            
          </grid>
      </div>
      
  
      
  </div>
  

  
  );
}
