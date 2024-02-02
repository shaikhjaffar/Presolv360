import React,{useState} from 'react'
import Pagination from '../../components/Pagination';
import Poad1 from '../../assets/Images/Poad1_bg_white.png'
import Poad2 from '../../assets/Images/Poad2_bg_white.png'
import Poad3 from '../../assets/Images/Poad3_bg_white.png'
import Poad4 from '../../assets/Images/Poad4_bg_white.png'
import Ep1 from '../../assets/Images/PoadcastImages/Ep1.png'
import Ep2 from '../../assets/Images/PoadcastImages/Ep2.png'
import Ep3 from '../../assets/Images/PoadcastImages/Ep3.png'
import Ep4 from '../../assets/Images/PoadcastImages/Ep4.png'
import Ep5 from '../../assets/Images/PoadcastImages/Ep5.png'
import Ep6 from '../../assets/Images/PoadcastImages/Ep6.png'
import Ep7 from '../../assets/Images/PoadcastImages/Ep7.png'
import Ep8 from '../../assets/Images/PoadcastImages/Ep8.png'
import Ep9 from '../../assets/Images/PoadcastImages/Ep9.png'
import AnimatedBox from '../../components/AnimatedBox';
export default function Podcast() {
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(3);
     const podcastData = [
        {
            tittle:"ODR and The Future of Dispute Resolution",
            description:"In this concluding episode, we delve into the future of dispute resolution, with a focus on the evolving landscape of ODR. We will also discuss emerging trends, potential challenges, and the profound impact of ODR on traditional legal systems. Join us for this engaging exploration of the potential of ODR to shape the future of dispute resolution in our last episode of the season.",
            icon:[
                {
                    links:"https://music.amazon.in/podcasts/d742a323-4d15-4fbc-ba12-f9888fc87cbd/episodes/59bf08fb-7ca4-40fe-ae6b-90eba4fe7ede/settle-the-battle-by-presolv360-9-odr-and-the-future-of-dispute-resolution",
                    image:Poad1
                },
                {
                    links:"https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5hY2FzdC5jb20vcHVibGljL3Nob3dzL3NldHRsZS10aGUtYmF0dGxl/episode/NjU0NDk4ZTljMDgwMWYwMDEyZGQ4OGM0?sa=X&ved=0CAUQkfYCahcKEwiQ7uvskoWEAxUAAAAAHQAAAAAQAQ",
                    image:Poad2
                },
                {
                    links:"https://open.spotify.com/episode/2l2VAKAny7P2RGzIV8a2kd?si=51db7c2def0241bb",
                    image:Poad3
                },
                {
                    links:"https://podcasts.apple.com/in/podcast/9-odr-and-the-future-of-dispute-resolution/id1688518562?i=1000633654542",
                    image:Poad4
                }
            ],
            poadImage:Ep9
            
        },
        {
            tittle:"Bills, Acts & eCourts : India's Ambition to Become a Global ODR Hub",
            description:"We explore India's ambitious pursuit of Online Dispute Resolution (ODR) through government initiatives, legislative changes, and technological innovation – all with the vision of becoming a global ODR hub.",
            icon:[
                {
                    links:"https://music.amazon.in/podcasts/d742a323-4d15-4fbc-ba12-f9888fc87cbd/episodes/44dbe0af-3c1a-40ec-a049-f754bfdff4d0/settle-the-battle-by-presolv360-8-bills-acts-ecourts-india's-ambition-to-become-a-global-odr-hub",
                    image:Poad1
                },
                {
links:"https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5hY2FzdC5jb20vcHVibGljL3Nob3dzL3NldHRsZS10aGUtYmF0dGxl/episode/NjUxNDIzYjE4YWEzNTYwMDExZWM4ZjVm?sa=X&ved=0CAUQkfYCahcKEwiQ7uvskoWEAxUAAAAAHQAAAAAQAQ",
                    image:Poad2
                },
                {
                    links:"https://open.spotify.com/episode/5Kz9T91XR8qiN1UmOg0R18?si=DbQACc-DRUapsJ5XB_fD-w&utm_source=copy-link",
                    image:Poad3
                },
                {
                    links:"https://podcasts.apple.com/in/podcast/8-bills-acts-ecourts-indias-ambition-to-become-a/id1688518562?i=1000629462014",
                    image:Poad4
                }
            ],
            poadImage:Ep8
            
        },    {
            tittle:"Embracing Mediation: A Transformative Path for Resolving Conflicts",
            description:"Mediation, an alternative dispute resolution process, offers many benefits, such as faster resolution, cost-effectiveness, and relationship preservation. Join us as we go on a journey to understand how mediation is more than just an alternative – it is a powerful choice for harmonious dispute resolution.",
            icon:[
                {
                    links:"https://music.amazon.in/podcasts/d742a323-4d15-4fbc-ba12-f9888fc87cbd/episodes/a48e0abf-1f97-4702-ba59-a242b5e0f675/settle-the-battle-by-presolv360-7-embracing-mediation-a-transformative-path-for-resolving-conflicts",
                    image:Poad1
                },
                {
                    links:"https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5hY2FzdC5jb20vcHVibGljL3Nob3dzL3NldHRsZS10aGUtYmF0dGxl/episode/NjRmMzAyNDBhMjExNjUwMDExNjBhMTA0?sa=X&ved=0CAUQkfYCahcKEwiQ7uvskoWEAxUAAAAAHQAAAAAQAQ",
                    image:Poad2
                },
                {
                    links:"https://open.spotify.com/episode/1ln10n5JZLf0guFIjJDeL7?si=Tcvtvp8HSaajm9F_ee6l0g&utm_source=copy-link",
                    image:Poad3
                },
                {
                    links:"https://podcasts.apple.com/in/podcast/7-embracing-mediation-a-transformative-path-for/id1688518562?i=1000626647798",
                    image:Poad4
                }
            ],
            poadImage:Ep7
            
        },     {
            tittle:"Mediation 101: The Power of Resolving Disputes Amicably",
            description:"Mediation empowers disputing parties to find common ground, leading to amicable dispute resolution. Join us as we explore the benefits of this dispute-resolution method, the rise of online mediation, and how platforms like Presolv360 are making it more accessible than ever. Witness how technology and empathy can come together to mend relationships and achieve peaceful resolutions, even across borders.",
            icon:[
                {
                    links:"https://music.amazon.in/podcasts/d742a323-4d15-4fbc-ba12-f9888fc87cbd/episodes/73220bf2-55e8-478e-9903-dd00637123f2/settle-the-battle-by-presolv360-6-mediation-101-the-power-of-resolving-disputes-amicably",
                    image:Poad1
                },
                {
                    links:"https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5hY2FzdC5jb20vcHVibGljL3Nob3dzL3NldHRsZS10aGUtYmF0dGxl/episode/NjRlMDhlMzhjZTAzZGUwMDExNzUwZDY5?sa=X&ved=0CAUQkfYCahcKEwiQ7uvskoWEAxUAAAAAHQAAAAAQAQ",
                    image:Poad2
                },
                {
                    links:"https://open.spotify.com/episode/5m4H5iYQP9sT3pWBAO0KBG?si=fwFs3mZmQw6xNQvimclFJA&utm_source=copy-link",
                    image:Poad3
                },
                {
                    links:"https://podcasts.apple.com/in/podcast/6-mediation-101-the-power-of-resolving-disputes-amicably/id1688518562?i=1000625079508",
                    image:Poad4
                }
            ],
            poadImage:Ep6
            
        },
        {
            tittle:"Realm of Arbitration : Institutional V/s AdHoc",
            description:"What's the difference between Institutional and AdHoc Arbitration? With the Indian government setting up a High-Level Committee to focus on Institutional Arbitration, we take a look at what these different forms of arbitration entail – and why one of them often might be a better choice than the other.",
            icon:[
                {
                    links:"https://music.amazon.in/podcasts/d742a323-4d15-4fbc-ba12-f9888fc87cbd/episodes/8d751c77-f8e8-4966-a3bf-0bdb3e44f3d4/settle-the-battle-by-presolv360-5-realm-of-arbitration-institutional-v-s-adhoc",
                    image:Poad1
                },
                {
                    links:"https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5hY2FzdC5jb20vcHVibGljL3Nob3dzL3NldHRsZS10aGUtYmF0dGxl/episode/NjRiOTFiZTk1YWE0Y2UwMDExMzY5YzBh?sa=X&ved=0CAUQkfYCahcKEwiQ7uvskoWEAxUAAAAAHQAAAAAQAQ",
                    image:Poad2
                },
                {
                    links:"https://open.spotify.com/episode/2h0AVOjsSMCsjL9s4Chr6v?si=6uRmOZ3ITa2K7l2fWJXlDQ&utm_source=copy-link",
                    image:Poad3
                },
                {
                    links:"https://podcasts.apple.com/in/podcast/5-realm-of-arbitration-institutional-v-s-adhoc/id1688518562?i=1000621837854",
                    image:Poad4
                }
            ],
            poadImage:Ep5
            
        },    {
            tittle:"Revolutionizing Justice: The Power of Online Dispute Resolution",
            description:"We discover how technology is driving accessible and efficient dispute resolution, breaking free from traditional brick-and-mortar courtrooms. We also explore implementations of ODR in various sectors, including domain name disputes, consumer grievances, and government litigations.",
            icon:[
                {
                    links:"https://music.amazon.in/podcasts/d742a323-4d15-4fbc-ba12-f9888fc87cbd/episodes/bf22c938-6c52-4604-bcda-9e6bee5fc3fb/settle-the-battle-by-presolv360-4-revolutionizing-justice-the-power-of-online-dispute-resolution",
                    image:Poad1
                },
                {
                    links:"https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5hY2FzdC5jb20vcHVibGljL3Nob3dzL3NldHRsZS10aGUtYmF0dGxl/episode/NjRhNDEzMmQyYjdiNzkwMDExODM5ZjBk?sa=X&ved=0CAUQkfYCahcKEwiQ7uvskoWEAxUAAAAAHQAAAAAQAQ",
                    image:Poad2
                },
                {
                    links:"https://open.spotify.com/episode/1X63BHefPK7TwEU2RjW6x4?si=CS0Vv0vaS-uwle83S3hHtQ&utm_source=copy-link",
                    image:Poad3
                },
                {
                    links:"https://podcastsconnect.apple.com/my-podcasts/show/settle-the-battle-by-presolv360/4bb01c16-9021-45e3-9e59-952b68c90290/episode/4-revolutionizing-justice-the-power-of-online-dispute-resolution/ba5a40fa-05b9-4461-8228-f43161d9a057",
                    image:Poad4
                }
            ],
            poadImage:Ep4
            
        },     {
            tittle:"To ODR or Not to ODR – The Types of Disputes Resolvable Online",
            description:"We navigate the various types of disputes that can be solved with the help of ODR, and also examine the exceptions where ODR processes may not be applicable.",
            icon:[
                {
                    links:"https://music.amazon.in/podcasts/d742a323-4d15-4fbc-ba12-f9888fc87cbd/episodes/3180b1f9-6e76-4abd-886d-4cb057dc6a99/settle-the-battle-by-presolv360-3-to-odr-or-not-to-odr-%E2%80%93-the-types-of-disputes-resolvable-online?ref=dm_sh_sdvXhHuTnQvq6wFr92WuZKje2",
                    image:Poad1
                },
                {
                    links:"https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5hY2FzdC5jb20vcHVibGljL3Nob3dzL3NldHRsZS10aGUtYmF0dGxl/episode/NjQ4YzZhNjI1OTFmMWEwMDExMzFmMmI3?sa=X&ved=0CAUQkfYCahcKEwiQ7uvskoWEAxUAAAAAHQAAAAAQAQ",
                    image:Poad2
                },
                {
                    links:"https://open.spotify.com/episode/2BHG8hLObUCqF72Lp6xVIg?si=s3o2_pt1TSeFldv-wB81WA&utm_source=copy-link",
                    image:Poad3
                },
                {
                    links:"https://podcasts.apple.com/in/podcast/3-to-odr-or-not-to-odr-the-types-of-disputes-resolvable-online/id1688518562?i=1000617333305",
                    image:Poad4
                }
            ],
            poadImage:Ep3
            
        },
        {
            tittle:"Overview of ODR methods to solve disputes",
            description:"An overview of the various mechanisms found in ODR – arbitration, mediation, and negotiation –as well as how Presolv360 uses technology in its delivery.",
            icon:[
                {
                    links:"https://music.amazon.com/podcasts/d742a323-4d15-4fbc-ba12-f9888fc87cbd/episodes/87bb1dd6-410a-41cf-a1c1-0db46fb3b0ba/settle-the-battle-by-presolv360-2-overview-of-odr-methods-to-solve-disputes",
                    image:Poad1
                },
                {
                    links:"https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5hY2FzdC5jb20vcHVibGljL3Nob3dzL3NldHRsZS10aGUtYmF0dGxl/episode/NjQ3OGEzMzk5ZWQ3ZGYwMDExMmNhZWVi?sa=X&ved=0CAUQkfYCahcKEwiQ7uvskoWEAxUAAAAAHQAAAAAQAQ",
                    image:Poad2
                },
                {
                    links:"https://open.spotify.com/episode/4dlRcbN9j8fpn1kQiz42UF?si=iHC5j7olSDaD33cBEQ22KA&utm_source=copy-link&nd=1",
                    image:Poad3
                },
                {
                    links:"https://podcasts.apple.com/in/podcast/2-overview-of-odr-methods-to-solve-disputes/id1688518562?i=1000615369093",
                    image:Poad4
                }
            ],
            poadImage:Ep2
            
        },    {
            tittle:"The Basics of ODR",
            description:"The judicial system of India is facing a lot of challenges, leading to a heavy backlog of cases in the courts. Clearing the ever-increasing logjam of pending cases needs a saviour, and there is one waiting in the wings. With its technology-driven solutions, Online Dispute Resolution (ODR) offers a unique opportunity to revolutionize access to justice.",
            icon:[
                {
                    links:"https://music.amazon.com/podcasts/d742a323-4d15-4fbc-ba12-f9888fc87cbd/episodes/652554c0-9343-48bf-82d1-53bc8c2c73af/settle-the-battle-by-presolv360-1-the-basics-of-odr",
                    image:Poad1
                },
                {
                    links:"https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5hY2FzdC5jb20vcHVibGljL3Nob3dzL3NldHRsZS10aGUtYmF0dGxl/episode/NjQ2NGQ5OTI3NDk5MGIwMDExZTUyMjE5?sa=X&ved=0CAUQkfYCahcKEwiQ7uvskoWEAxUAAAAAHQAAAAAQAQ",
                    image:Poad2
                },
                {
                    links:"https://open.spotify.com/show/7FInufSYrh1iVw9T4Vt4CW",
                    image:Poad3
                },
                {
                    links:"https://podcasts.apple.com/us/podcast/settle-the-battle-by-presolv360/id1688518562",
                    image:Poad4
                }
            ],
            poadImage:Ep1
            
        },
        

     ]
     const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = podcastData.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(podcastData.length / recordsPerPage)
  return (
    <div className='podcast'>

   
    <section className='landing_wrap firstBreak'>
       {
        window.innerWidth > 600 ?   <h1>
       A first-of-its-kind ODR-focused podcast is now live.<br></br> Tune in to explore the realms of <br></br> online dispute resolution
        </h1> :   <h1 style={{padding:"0 .5em",fontSize:"32px"}}>
        A first-of-its-kind ODR-focused podcast is now live. Tune in to explore the realms of online dispute resolution 
        </h1>
       }
      
         <h3><span style={{color:"var(--color_2)"}}>#SettleTheBattle</span></h3>
         <AnimatedBox/>
    </section>
    {/* <div className='section_heading'>
          <h2 className='blue_heading'>Podcast</h2>
        </div>
        <div className='settel_wrap'>
            <h2>Settle the Battle Series</h2>
            <p>A dive into the world of Online Dispute Resolution (ODR). Hosted by the team at Presolv360, a leading ODR platform based out of Mumbai, India. Join us as we explore how ODR is paving the way for the future of the legal system and justice delivery in India and elsewhere.
</p>
        </div> */}
        <section className='poadcast_main_wrap'>

            {
                currentRecords.map((poadcast)=>{
                    return (
                        <div className='resource_wrap'>
                        <div className='course_right_wrap'>
                        <img src={poadcast.poadImage} style={{width:"75%"}} alt='image'/>
                       </div>
                       <div className='resource_left_wrap'>
                         <h3>{poadcast.tittle}
                </h3> 
                <p style={{lineHeight:"140%"}} >{poadcast.description}
                </p>
                <h3>Listen on</h3>
                <div className='resourse_social_media_wrap'>
                    {
                        poadcast.icon.map((icon_e)=>{
                             return (
                                <a href={icon_e.links} target='_blank'><img src={icon_e.image}/></a>
                             )
                        })
                    }
                </div>
                       </div>
                        </div>
                    )
                })
            }
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </section>
    
    </div>
  )
}
