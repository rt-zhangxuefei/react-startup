import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { getPackageInfo } from '../../store/PackageInfo/actions';
import { AppState } from '../../store/rootReducer';
import './PackageInfo.less';
import { Statistic, Row, Col } from 'antd';
import { LikeOutlined, BranchesOutlined } from '@ant-design/icons';

const selectPackage = createSelector(
  (state: AppState) => state.pkg,
  (pkg) => pkg.packageInfo,
);

function PackageInfo() {
  const dispatch = useDispatch();
  const packageInfo = useSelector(selectPackage);
  useEffect(() => {
    dispatch(getPackageInfo('react'));
  }, []);

  return (
    <div className="PackageInfo">
      <h1>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener">
          React
        </a>
      </h1>
      <Row gutter={16}>
        <Col span={8}>
          <Statistic
            title="Github Stars"
            value={packageInfo && packageInfo.starsCount}
            prefix={<LikeOutlined />}
          ></Statistic>
        </Col>
        <Col span={8}>
          <Statistic
            title="Github Forks"
            value={packageInfo && packageInfo.forksCount}
            prefix={<BranchesOutlined />}
          />
        </Col>
      </Row>
    </div>
  );
}

export default memo(PackageInfo);
