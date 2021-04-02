import React, { Component } from 'react';
import { connect } from "react-redux";
import { getUnitsAction } from '../../actions/units/get';
import { filterUnitAction } from '../../actions/units/filter';
import { Ages, Cost, FilterType, RootObject } from '../../types/dataTypes';
import { History } from 'history';
import { setUnitDetail } from '../../actions/units/set-unit-detail';
import { Button, Table, Checkbox, Slider, Avatar, Card } from 'antd';
import { withRouter } from 'react-router-dom';
import './style.scss';
import { AnyAction } from 'redux'
import sultan from '../../global/assets/sultan.jpeg'

const ButtonGroup = Button.Group;
export type UnitsState = {
  ages: Array<Ages>,
  filter: FilterType,
  filterDrawerVisible: boolean,
};

export type UnitsProps = {
  history: History,
  units: Array<RootObject>,
  getUnitsAction: (payload?: AnyAction | undefined) => void;
  filterUnitAction: (payload: FilterType) => void;
  setUnitDetail: (record: any) => void;
};
class Units extends Component<UnitsProps, UnitsState>  {
  constructor(props: UnitsProps) {
    super(props)

    this.state = {
      filterDrawerVisible: false,
      ages: [
        { id: 0, name: 'All' },
        { id: 1, name: 'Dark' },
        { id: 2, name: 'Feudal' },
        { id: 3, name: 'Castle' },
        { id: 4, name: 'Imperial' },],
      filter: {
        age: "All",
        woodValue: null,
        foodValue: null,
        goldValue: null,
        woodChecked: false,
        foodChecked: false,
        goldChecked: false,
      }
    };
  }

  componentDidMount() {
    this.props.getUnitsAction()
  }

  handleSetFilter = (key: any, value: any) => {
    this.setState(prevState => ({ filter: { ...prevState.filter, [key]: value } }), () => {
      this.props.filterUnitAction(this.state.filter);
    });
  }

  renderAge = (age: Ages) => (
    <Button
      className="button"
      key={age.id}
      type={age.name === this.state.filter.age ? "primary" : "ghost"}
      onClick={() => this.handleSetFilter("age", age.name)}>
      {age.name}
    </Button>
  );

  renderAgesFilter = (ages: Array<Ages>) => (
    <>
      <h3 className="ages-title"> Ages </h3>
      <ButtonGroup className="buttonGroup"  >
        {ages.map(age => this.renderAge(age))}
      </ButtonGroup>
    </>
  )

  renderCostsFilter = (name: string, key: any, sliderValue: number, checkKey: any) => (
    <div className="cost-filter-element">
      <Checkbox onChange={() => this.handleSetFilter(checkKey, !this.state.filter[checkKey])} />
      <div className="margin-horizontal15"> {name} </div>
      <div className="slider">
        <Slider
          onChange={(value) => this.handleSetFilter(key, value)}
          min={0}
          max={200}
          disabled={!this.state.filter[checkKey]}
        />
      </div>
      <div>{sliderValue}</div>
    </div>
  )

  renderCosts = (costs: Cost) => {
    let value = '';
    if (costs?.Wood) {
      value = `Wood: ${costs.Wood}`;
    } if (costs?.Food) {
      value = value?.length > 0 ? (`${value}, Food: ${costs.Food}`) : `Food: ${costs.Food}`;
    } if (costs?.Gold) {
      value = value?.length > 0 ? (`${value}, Gold: ${costs.Gold}`) : `Gold: ${costs.Gold}`;
    }
    return value ? value : 'Unknown';
  }

  columns() {
    return [
      {
        title: "Avatar",
        key: 'avatar',
        render: () => (
          <Avatar src={sultan} />
        ),
      },
      {
        title: "Id",
        key: 'id',
        render: ({ id }: any) => id
      },
      {
        title: "Name",
        key: 'name',
        render: ({ name }: any) => name
      },
      {
        title: "Age",
        key: 'age',
        render: ({ age }: any) => age

      },
      {
        title: "Costs",
        key: 'costs',
        render: ({ cost }: any) => this.renderCosts(cost)
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (text: string, record: object) => (
          <Button color="#1890ff" id="increment" onClick={
            () => {
              this.props.setUnitDetail(record);
              this.props.history.push('/unit_detail', { detail: record });
            }
          }>
            Show Details
          </Button >
        ),
      }
    ];
  }

  renderTable = (data: Array<RootObject>) => (
    <div className="table">
      <Table
        size="small"
        pagination={{ pageSize: 20 }}
        // rowKey={unit => unit.id.toString()}
        columns={this.columns()}
        dataSource={data}
      />
    </div>
  )

  render() {
    const { ages } = this.state;
    const { units } = this.props;
    return (
      <div className="container">
        <div className="col-12" style={{ maxWidth: 720, width: "100%" }}>
          <Card>
            {this.renderAgesFilter(ages)}
            {this.renderCostsFilter("Wood", "woodValue", this.state.filter.cost?.wood, "woodChecked")}
            {this.renderCostsFilter("Food", "foodValue", this.state.filter.cost?.food, "foodChecked")}
            {this.renderCostsFilter("Gold", "goldValue", this.state.filter.cost?.gold, "goldChecked")}
          </Card>

          {this.renderTable(units)}
        </div>
      </div>

    );
  }
}

const mapDispatchToProps = {
  getUnitsAction,
  filterUnitAction,
  setUnitDetail,
}

const mapStateToProps = (state: any) => ({
  units: state.units?.filteredData
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Units))