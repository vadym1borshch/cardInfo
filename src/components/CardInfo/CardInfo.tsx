import { ChangeEvent, FC, useState } from 'react'
import {
  Box,
  Button,
  Card,
  Icon,
  SxProps,
  TextField,
  Theme,
} from '@mui/material'
import { CustomTabs } from '../Tab/Tab'
import { TextExpander } from '../TextExpander/TextExpander'
import {
  addCardAction,
  CardType,
  changeCardTextAction,
  deleteCardAction,
  incLikesActions,
} from '../../store/CardInfoSlice'
import { useDispatch } from 'react-redux'
import {
  addCardContainerChildrenModal,
  mainContainerStyles,
  modalChildrenContainerStyles,
} from './CardInfoStyles'
import FavoriteIcon from '@mui/icons-material/Favorite'
import * as React from 'react'
import { v4 } from 'uuid'
import { CustomModal } from '../Modal/Modal'
import { splitStyles } from '../../common/commonFunctions'

interface ICardInfoProps {
  info: CardType[]
  sx?: SxProps<Theme>
}

export const CardInfo: FC<ICardInfoProps> = ({ info, sx }) => {
  const [renderCard, setRenderCard] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [isAddCard, setIsAddCard] = useState(false)
  const [query, setQuery] = useState('')
  const [cardHeader, setCardHeader] = useState('')
  const [cardText, setCardText] = useState('')

  const dispatch = useDispatch()

  const renderCardHandler = (event: React.SyntheticEvent, newValue: number) => {
    setRenderCard(newValue)
  }

  const addCardHandler = () => {
    if (!cardHeader || !cardText) {
      console.warn('need text & header texts fo add card')
      setIsAddCard(false)
      return
    }
    setIsAddCard(false)
    dispatch(
      addCardAction({
        id: v4(),
        header: cardHeader,
        text: cardText,
        likes: 0,
      }),
    )
    setCardHeader('')
    setCardText('')
  }

  const changeCardTexHandler = () => {
    setOpenModal(false)
    if (!query) return
    dispatch(changeCardTextAction({ id: info[renderCard].id, value: query }))
    setQuery('')
  }

  const likesCountHandler = () => {
    dispatch(incLikesActions(info[renderCard].id))
  }
  const deleteCardHandler = () => {
    setRenderCard(0)
    dispatch(
      deleteCardAction({ id: info[renderCard].id, renderEl: renderCard }),
    )
  }

  const onChangeCardTextHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setQuery(e.currentTarget.value)
  }
  const onChangeAddCardTextHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setCardText(e.currentTarget.value)
  }
  const onChangeHeaderCardHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setCardHeader(e.currentTarget.value)
  }

  return (
    <Box sx={splitStyles(sx, mainContainerStyles)}>
      <CustomModal isOpen={isAddCard}>
        <Box sx={modalChildrenContainerStyles}>
          <Box sx={addCardContainerChildrenModal}>
            <TextField
              label="Header"
              value={cardHeader}
              onChange={onChangeHeaderCardHandler}
            />
            <TextField
              label="Text"
              id="outlined-multiline-static"
              multiline
              rows={6}
              variant="outlined"
              value={cardText}
              onChange={onChangeAddCardTextHandler}
            />
          </Box>
          <Button onClick={addCardHandler}>
            {' '}
            {!cardText && !cardHeader ? 'cancel' : 'add'}
          </Button>
        </Box>
      </CustomModal>
      <CustomModal isOpen={openModal}>
        <Box sx={modalChildrenContainerStyles}>
          <TextField
            label="Text"
            id="outlined-multiline-static"
            multiline
            rows={6}
            variant="outlined"
            value={query}
            onChange={onChangeCardTextHandler}
          />
          <Button onClick={changeCardTexHandler}>
            {!query ? 'exit' : 'approve'}
          </Button>
        </Box>
      </CustomModal>
      <CustomTabs
        value={renderCard}
        tabsMapper={info}
        onChange={renderCardHandler}
      />
      <Card
        sx={{ width: '50%' }}
        className="card_container"
        key={info[renderCard].id}
      >
        <Box className="descriptions_container">
          <h3 className="header">{info[renderCard].header}</h3>
          <TextExpander>{info[renderCard].text}</TextExpander>
          <Box className="likes_container">
            <span className="likes">{info[renderCard].likes}</span>
            <Button
              className="likes_container_button"
              onClick={likesCountHandler}
            >
              <Icon>
                <FavoriteIcon />
              </Icon>
            </Button>
          </Box>
        </Box>
        <Box className="actions_container">
          <Button
            className="actions_container_delete_button"
            onClick={deleteCardHandler}
            disabled={info.length === 1}
          >
            delete
          </Button>
          <Button
            className="actions_container_modal_button"
            onClick={() => setOpenModal(true)}
          >
            change text
          </Button>
        </Box>
      </Card>
      <Box className="add_card_container">
        <Button onClick={() => setIsAddCard(true)}>add new card</Button>
      </Box>
    </Box>
  )
}
