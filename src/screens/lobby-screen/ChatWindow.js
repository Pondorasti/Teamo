import React from "react"
import SendMessage from "./SendMessage"
import Message from "./Message"
import messageData from "./messageData"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const padding = 24
const useStyles = makeStyles(theme => ({
  gridContainer: {
    overflow: "scroll",
    height: "calc(100vh - 64px)",
    padding: `${padding}px`,
    paddingBottom: 0,
    backgroundColor: theme.palette.grey[700],
  },
  mainGrid: {
    "& > *:nth-last-child(2)": {
      paddingBottom: padding
    },
    marginBottom: 0,
  },
  sendMessageGridContainer: {
    position: "sticky",
    bottom: 0,
    paddingTop: 0,
    paddingBottom: padding,
    backgroundColor: theme.palette.grey[700],
  },
}))

function ChatWindow() {
  const classes = useStyles()

  const messages = messageData.map((message, index) => (
    <Grid item key={index}>
      <Message
        username={message.username}
        avatarUrl={message.avatarUrl}
        timestamp={message.timestamp}
        message={message.message}
      />
    </Grid>
  ))

  return (
    <Grid container classes={{ root: classes.gridContainer }}>
      <Grid
        item
        container
        justify="flex-end"
        direction="column"
        spacing={2}
        wrap="nowrap"
        classes={{ root: classes.mainGrid }}
      >
        {messages}

        <Grid item classes={{ root: classes.sendMessageGridContainer }}>
          <SendMessage />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ChatWindow
