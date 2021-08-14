// import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem } from '../../redux/actions/item'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { IconContext } from 'react-icons'

import { getVisibleContacts } from '../../redux/selectors/contact-selectors'
import { List, Item } from './ContactList.styled'
import IconButton from '../IconButton'

// const getVisibleContacts = () => {
//     const normalizedFilter = filter.toLowerCase()
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     )
//   }

// const getItems = (state) => state.items
// const getFilter = (state) => state.filter
// const getVisibleContacts = (state) => {
//   const filter = getFilter(state)
//   const items = getItems(state)
//   const normalizedFilter = filter.toLowerCase()
//   return items.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   )
// }

// const deleteContact = (contactId) => {
//     setContacts((prevState) =>
//       prevState.filter((contact) => contact.id !== contactId),
//     )
//   }

export default function ContactList() {
  const dispatch = useDispatch()

  // console.log('items >>', items)
  const DeleteContact = (id) => {
    dispatch(deleteItem(id))
  }

  const items = useSelector(getVisibleContacts)

  return (
    <List>
      {items.map((contact) => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <IconButton onClick={() => DeleteContact(contact.id)}>
            <IconContext.Provider value={{ size: '23px' }}>
              <RiDeleteBin6Fill />
            </IconContext.Provider>
          </IconButton>
        </Item>
      ))}
    </List>
  )
}

// ContactList.propTypes = {
//   // contacts: PropTypes.array.isRequired,
//   // onClick: PropTypes.func.isRequired,
// }
