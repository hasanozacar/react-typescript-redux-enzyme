import React, { Component } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { RootObject } from '../../types/dataTypes';
import { Descriptions } from 'antd';
import logo from '../../global/assets/sultan.jpeg'

export type UnitDetailProps = {
  unitDetail?: RootObject | undefined,
};

class UnitDetail extends Component<UnitDetailProps> {
  constructor(props: UnitDetailProps) {
    super(props);

    this.state = {
    };
  }

  renderCostItems = (key: string, value: any) => (
    <div>
      <h3>
        {`${key}: ${value || 'Unknown'}`}
      </h3>
    </div>
  )

  renderElements = (data: RootObject | undefined) => {
    if (typeof data === "object") {
      const keys = Object.keys(data);
      return (
        keys.map(k => (k !== 'cost' ? (
          <Descriptions.Item label={k.toUpperCase()}>
            <h3>
              {data[k]}
            </h3>
          </Descriptions.Item>
        ) :
          <Descriptions.Item label="Cost">
            {this.renderCostItems('Wood Cost', data.cost?.Wood)}
            {this.renderCostItems('Food Cost', data.cost?.Food)}
            {this.renderCostItems('Gold Cost', data.cost?.Gold)}
          </Descriptions.Item>)));
    }
  }

  render() {
    return (
      <div className="container">
        <h2 className="title"> Unit Detail Page</h2>
        <img src={logo} className="image" alt="Logo" />
        <Descriptions
          bordered
          column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
        >
          {this.renderElements(this.props?.unitDetail)}
        </Descriptions>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  unitDetail: state.units?.unitDetail
});


export default connect(mapStateToProps, null)(UnitDetail);
