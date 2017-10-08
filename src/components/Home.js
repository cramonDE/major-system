import React, { Component } from 'react';
import logo from '../logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Query from './Query';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

const styles = {
  card: {
    maxWidth: '80%',
    margin: 'auto',
    textAlign: 'center'
  },
  media: {
    height: 200,
  },
};

class Home extends Component {
  render() {
    return (
      <Router >
        <Card className = {this.props.classes.card}>
          <CardMedia
            image={logo}
            className = {this.props.classes.media}
          />
          <CardContent>
            <Typography type="headline" gutterBottom>
              中山大学专业咨询系统
            </Typography>
            <Typography type="body2" gutterBottom>
              假装这里有介绍
            </Typography>
          </CardContent>

          <CardActions>

            <TextField
              label="请输入你的姓名/昵称"
              placeholder="姓名/昵称"

              margin="normal"
            />
          </CardActions>
          <CardActions>

            <Button dense color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </Router>
    );
  }
}

export default withStyles(styles)(Home);
