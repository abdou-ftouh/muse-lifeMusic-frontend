import './style.css'
import React, { useState } from 'react'
import Bands from '../../features/bands/Bands';
import { createBand } from '../../features/bands/bandsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { faHouseChimneyUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const bandDefaults = {
    name: "", 
    members: [
        {
            name: "", 
            roles: [], 
            images: [], 
        },
    ],
    mediaLinks: { facebook : "facebookLink", instagram : "instagramLink", tiktok : "tiktokLink", twitter : "twitterLink" }, 
    biography: "",
    genres: [],
    calendarType: "Google",
    calendarID: "",
    events: []
}


const FormPage = ({ type }) => {
    const dispatch = useDispatch();
    const [formState, setFormState] = useState(bandDefaults);
    const [members, setMembers] = useState([]);
    const [mediaState, setMediaState] = useState({});

    // ---------------- HANDLE CHANGE ----------------

{/* CLEAR FORM ------------- */}
        const clearForm = (e) => {
            e.preventDefault();
            setFormState(bandDefaults)
        }
{/* INPUTS ------------- */}
        const handleChange = (e) => {
            const { name, value, type, checked } = e.target;
            console.log(`${name}: ${value}`)
            setFormState((state) => ({
                ...formState,
                [name]: type === "checkbox" ? checked : value
            }));
            console.log(formState)
        }
{/* GENRES ------------- */}
        const addGenre = (e) => {
            const { value, checked } = e.target;
            let genresArray = formState.genres
            console.log(formState.genres)
            checked 
                ? genresArray.push(value)
                : genresArray.splice(genresArray.indexOf(value), 1)

            // console.log(genresArray)
            setFormState({...formState, genres : genresArray})
            console.log(formState.genres)
            console.log(formState)
        }
{/* MEMBERS ------------- */}
        let holderName = ""
        let holderRoles = []
        const addMember = (e) => {
            const { name, value } = e.target
            let member = { name: "", roles: [] }

            if (name === "memberName") holderName = value
            if (name === "memberRoles") {
                holderRoles.splice(holderRoles.indexOf(value), 1)
                holderRoles.push(value)
            }

            console.log(holderName)
            console.log(holderRoles)

            member.name = holderName
            member.roles = holderRoles
            console.log(member)
            
        }
{/* MEDIA ICONS ------------- */}
        // console.log(formState.mediaLinks)
        let tempMediaType;
        let tempMediaLink;
        let finalObject = {}
        let tempState = bandDefaults.mediaLinks;

        const handleMediaIcons = (e) => {
            const { name, value } = e.target;

            if(name === 'mediaType') {
                tempMediaType = value
                // console.log('TYPE: ' + tempMediaType)
            }
            if(name === 'mediaLink') {
                tempMediaLink = value
                // console.log('LINK: ' + tempMediaLink)
            }

            let newEntry = [ tempMediaType , tempMediaLink ]
            let newMediaArray = Object.entries(tempState)
            

            // console.log('New Entry....' + newEntry)
            // console.log(newMediaArray)

            const targetValue = newMediaArray.find(entry => entry[0] === newEntry[0])
            const targetIndex = newMediaArray.indexOf(targetValue)

            // console.log('Tval.....' + targetValue)
            // console.log('Tindex....' + targetIndex)
            // console.log(newMediaArray)

            // if (targetValue) {
            if (targetValue && tempMediaType === targetValue[0]) {
                console.log('------ GETTING THERE!!! ------')
                console.log('TV.....' + targetValue[1])
                // newMediaArray.splice( targetIndex + 1, 1, targetValue.splice(1, 1, tempMediaLink) )
                newMediaArray.splice(targetIndex, 1, newEntry)
                tempState = Object.fromEntries(newMediaArray)
                // finalObject = Object.fromEntries(newMediaArray)
                // tempState = finalObject
                console.log(tempState)
                // console.log(tempState)
                // setMediaState(finalObject)
                // setFormState({...formState, mediaLinks : {finalObject} })
                // console.log(mediaState)
                // return tempState
                // newEntry = []
            }
            // console.log(formState.mediaLinks)
            // console.log(tempState)
            // console.log(formState.mediaLinks)
            // setFormState({ ...formState, mediaLinks : tempState })
            return tempState
        }



{/* SUBMIT ------------- */}
        const onSubmit = async (e) => {
            e.preventDefault()
            setFormState({ ...formState, mediaLinks : tempState })

            try {
                const url = 'http://localhost:4000/bands'
                const { formState : res } = await axios.post(url, formState)
                // console.log(res.message)
                console.log(formState)
            } catch (error) {
                console.error(error)
            }

            // dispatch(
            //     createBand(formState)
            // )
            // console.log(formState)
            // setFormState(bandDefaults)
        }
        // console.log(formState)


    return (
        // <form>
        //     <input type="checkbox" name="Music Lover">Music Fan</input>
        //     <input type="checkbox" name="Band">Band</input>
        // </form>
        <div className='container'>

        <form onSubmit={onSubmit} className='form'>
            
{/* MAIN INFO ------------- */}
            <section className='band-info'>
                <label>
                    Band Name
                    <input
                        autoFocus 
                        type="text"
                        id="bandName"
                        name="name"
                        placeholder="What is your band's name?"
                        value={formState.name}
                        onChange={handleChange} 
                    />
                </label>
                <label className='biography'>
                    <div>
                        <span>Biography</span>
                        <textarea autoFocus name='biography' value={formState.biography} onChange={handleChange} placeholder="Tell us about your band"></textarea>
                    </div>
                </label>
            </section><hr/>
{/* MEMBERS ------------- */}
            <span>Members</span>
            <section className='members-section'>
                <div className='member-subsection'>
                    <label>
                        Name
                        <input className='memberName' type="text" id="memberName" name="memberName" onChange={addMember} placeholder='name' />
                    </label>
                </div>
                <div className='member-subsection'>
                    <label>
                        Roles
                        <select className="memberRoles-select" name="memberRoles" onChange={addMember}  >
                            <option className='memberRoles' id="memberRoles" name="memberRoles" value='vocals'>vocals</option>
                            <option className='memberRoles' id="memberRoles" name="memberRoles" value='guitar'>guitar</option>
                            <option className='memberRoles' id="memberRoles" name="memberRoles" value='bass'>bass</option>
                            <option className='memberRoles' id="memberRoles" name="memberRoles" value='keyboard'>keyboard</option>
                            <option className='memberRoles' id="memberRoles" name="memberRoles" value='drums'>drums</option>
                        </select>
                    </label>
                </div>
            </section><hr/>
{/* GENRES ------------- */}
            <section className='genres-section'>
                    Genres
                <div className='genres-container'>
                    <div className='genre-option'>pop<input onChange={addGenre} type="checkbox" name="genres" value="pop" /></div>
                    <div className='genre-option'>rock<input onChange={addGenre} type="checkbox" name="genres" value="rock" /></div>
                    <div className='genre-option'>soul<input onChange={addGenre} type="checkbox" name="genres" value="soul" /></div>
                    <div className='genre-option'>reggae<input onChange={addGenre} type="checkbox" name="genres" value="reggae" /></div>
                    <div className='genre-option'>jazz<input onChange={addGenre} type="checkbox" name="genres" value="jazz" /></div>
                    <div className='genre-option'>mowtown<input onChange={addGenre} type="checkbox" name="genres" value="mowtown" /></div>
                </div>
            </section><hr/>
{/* CALENDAR ------------- */}
            <section className='calendar-section'>
                <span>Calender Type:</span>
                <div className='calendarType-container'>
                    Google<input onChange={handleChange} className='calendarType-option' type="radio" name="calendarType" checked={formState.calendarType === 'Google'} value="Google"/><br/>
                    Apple<input onChange={handleChange} className='calendarType-option' type="radio" name="calendarType" checked={formState.calendarType === 'Apple'} value="Apple"/>
                </div>
                <hr/>
                <label>
                    <span>Calendar ID</span>
                    <input
                        autoFocus 
                        type="text"
                        id="calendarID"
                        name="calendarID"
                        placeholder="Paste your Calendar ID"
                        // value={formState.calendarID}
                        onChange={handleChange} 
                    />
                </label>
            </section><hr/>
{/* MEDIA ICONS ------------- */}
                <span>Media Links</span>
            <section className='mediaLinks-section'>
                <select name="mediaType" onChange={handleMediaIcons}>
                    <option id="default" name="default" value={null} >Select Media Type</option>
                    <option id="facebook" name="facebook" value='facebook' >Facebook</option>
                    <option id="instagram" name="instagram" value="instagram" >Instagram</option>
                    <option id="tiktok" name="tiktok" value="tiktok" >tiktok</option>
                    <option id="twitter" name="twitter" value="twitter" >Twitter</option>
                    <option id="venmo" name="venmo" value="venmo" >Venmo</option>
                    <option id="cashApp" name="cashApp" value="cashApp" >CashApp</option>
                    <option id="spotify" name="spotify" value="spotify" >Spotify</option>
                </select>
                <input type="text" placeholder='Paste your link here' name="mediaLink" onChange={handleMediaIcons} ></input>
            </section>
{/* FORM BUTTONS ------------- */}
            <div className='formButtons-container'>
                <button onClick={clearForm}>Clear</button>
                <button type="submit">Submit</button>
            </div>

        </form>
        <Bands />
        </div>
    )
}

export default FormPage