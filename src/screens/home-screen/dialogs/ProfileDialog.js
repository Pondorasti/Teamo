import React from "react"
import PropTypes from "prop-types"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Dialog, DialogContent, Typography, Grid } from "@material-ui/core"

import { TMButton, TMAvatar } from "../../../atoms/"
import ProfileGameCard from "../../../atoms/ProfileGameCard"

const useStyles = makeStyles(theme => ({
  userInfoGridContainer: {
    width: "60%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  bioText: {
    margin: "4px 0px",
  },
  gamesGridContainer: {
    paddingTop: 16,
    backgroundColor: theme.palette.grey[700],
  },
}))

function ProfileDialog({
  open,
  onClose,
  username,
  status,
  bio,
  avatarUrl,
  gamesPlayed,
}) {
  const classes = useStyles()
  const theme = useTheme()

  const listGames = gamesPlayed.map(game => (
    <Grid item xs={12} sm={6} md={4} key={game.gameTitle}>
      <ProfileGameCard gameImg={game.gameImg} gameTitle={game.gameTitle} />
    </Grid>
  ))

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="profile-modal"
    >
      <DialogContent>
        <Grid container>
          <Grid
            container
            item
            wrap="nowrap"
            classes={{ root: classes.paddingContainer }}
          >
            <TMAvatar
              backgroundColor={theme.palette.grey[800]}
              src={avatarUrl}
              alt={username}
              status={status}
              size="large"
            />
            <Grid
              container
              item
              direction="row"
              justify="space-between"
              style={{ marginLeft: 16 }}
            >
              <Grid item classes={{ root: classes.userInfoGridContainer }}>
                <Typography variant="h2">{username}</Typography>
                <Typography variant="body1" classes={{ root: classes.bioText }}>
                  {bio}
                </Typography>
              </Grid>
              <Grid item>
                <TMButton onClick={onClose}>
                  Add Friend
                </TMButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogContent classes={{ root: classes.gamesGridContainer }}>
        <Grid container spacing={2} >
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              Games
            </Typography>
          </Grid>
          {listGames}
        </Grid>
      </DialogContent>
    </Dialog >
  )
}

ProfileDialog.propTypes = {
  /** If `true`, the modal is presented. */
  open: PropTypes.bool.isRequired,

  /** A function that is called when the modal needs to be closed. */
  onClose: PropTypes.func.isRequired,

  username: PropTypes.string.isRequired,

  /** An optional badge for the avatar */
  status: PropTypes.oneOf(["none", "online"]),

  bio: PropTypes.string.isRequired,

  avatarUrl: PropTypes.any,

  gamesPlayed: PropTypes.any,
}

export default ProfileDialog
