import React from 'react'

const BandMember = ({name, roles}) => {
  return (
    <section className='members-section'>
        <label htmlFor='memberName'>Name</label>
        <input
            autoFocus 
            type="text"
            id="memberName"
            name="memberName"
            placeholder="name"
            value={name}
            // onChange={onMemberNameChange}
        />

        <label htmlFor='memberRoles'>Roles</label>
        <select type='select'>
            <option value="vocals">vocals</option>
            <option value="guitar">guitar</option>
            <option value="bass">bass</option>
            <option value="drums">drums</option>
            <option value="piano">piano</option>
            <option value="keyboard">keyboard</option>
            <option value="saxophone">saxophone</option>
        </select>
    </section>
  )
}

export default BandMember