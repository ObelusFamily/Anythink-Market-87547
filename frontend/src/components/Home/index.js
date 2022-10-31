import Banner from "./Banner";
import MainView from "./MainView";
import React from "react";
import Tags from "./Tags";
import agent from "../../agent";
import { connect } from "react-redux";
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER,
  UPDATE_TITLE_SEARCH_VALUE,
  SEARCH_ITEMS,
} from "../../constants/actionTypes";

const Promise = global.Promise;

const mapStateToProps = (state) => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token,
  searchValue: state.itemList.searchValue,
});

const mapDispatchToProps = (dispatch) => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () => dispatch({ type: HOME_PAGE_UNLOADED }),
  onSearchValueChange: (searchValue) =>
    dispatch({ type: UPDATE_TITLE_SEARCH_VALUE, payload: { searchValue } }),
  searchNew: (tag, pager, payload) =>
    dispatch({ type: SEARCH_ITEMS, tag, pager, payload }),
});

class Home extends React.Component {
  componentWillMount() {
    const tab = "all";
    const itemsPromise = agent.Items.all;

    this.props.onLoad(
      tab,
      itemsPromise,
      Promise.all([agent.Tags.getAll(), itemsPromise(this.props.searchValue)])
    );
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  onSearchValueChange = async (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    this.props.onSearchValueChange(searchValue);

    if (searchValue.length >= 3) {
      this.props.searchNew(
        "all",
        agent.Items.all,
        await agent.Items.all(searchValue)
      );
    }
  };

  render() {
    return (
      <div className="home-page">
        <Banner
          searchValue={this.props.searchValue}
          onSearchValueChange={this.onSearchValueChange}
        />

        <div className="container page">
          <Tags tags={this.props.tags} onClickTag={this.props.onClickTag} />
          <MainView />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
