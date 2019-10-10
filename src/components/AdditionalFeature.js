import React from "react";

const AdditionalFeature = props => {
  console.log(`this is additionfeatures props`, props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.buyItem(props.feature)}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = state => {
//   console.log(state);
//   return {};
// };

// export default connect(
//   mapStateToProps,
//   {}
// )(AdditionalFeature);

export default AdditionalFeature;
