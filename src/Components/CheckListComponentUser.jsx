import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { mainObj } from "../MainObj";
import { useDispatch, useSelector } from "react-redux";
import {
  storeMainObj,
  userObjStored,
  userCheckedListArr,
  addUserPreviewData,
  addUserAddRole,
  takeArrFromUser,
} from "../Utils.jsx/UserSlice";

const CheckListComponentUser = ({ objRedux, propTab, value }) => {
  const dispatch = useDispatch();

  const roleFormData = useSelector((data) => data.admin.formData);

  const [childCheckboxList, setChildCheckBoxList] = useState(
    propTab.userTabTitle.manageArr
  );
  const [userChildCheckboxList, setUserChildCheckboxList] = useState(
    propTab.userTabTitle.manageArr
  );
  dispatch(takeArrFromUser(childCheckboxList));
  const dataArr = useSelector((data) => data.user.defaultArr);

  useEffect(() => {
    let name;
    roleFormData.selectVal === "User"
      ? (name = "parentCheckBox")
      : (name = "");
    if (name === "parentCheckBox") {
      if (dataArr.filter((data) => data.isChecked).length === 0) {
        let tempUser = childCheckboxList.map((user) => {
          return { ...user, isChecked: true };
        });
        setChildCheckBoxList(tempUser);
        dispatch(takeArrFromUser(childCheckboxList));
      }
    } else {
      let tempUser = childCheckboxList.map((user) =>
        user.name === name ? { ...user, isChecked: false } : user
      );
      setChildCheckBoxList(tempUser);
      dispatch(takeArrFromUser(childCheckboxList));
    }
  }, []);
  // console.log("objRedux", objRedux);
  // console.log("childCheckboxList", childCheckboxList);

  // const [childCheckboxListSecurity, setChildCheckBoxListSecurity] = useState(
  //   valuesOfProp[0].securityArr
  // );

  const childCheckBoxHandler = (e) => {
    const { name, checked } = e.target;

    if (name === "parentCheckBox") {
      let tempUser = childCheckboxList.map((user) => {
        console.log("user>>>>", user);
        return { ...user, isChecked: checked };
      });
      setChildCheckBoxList(tempUser);
      dispatch(takeArrFromUser(childCheckboxList));
    } else {
      let tempUser = childCheckboxList.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setChildCheckBoxList(tempUser);
      dispatch(takeArrFromUser(childCheckboxList));
    }
  };

  const filteredArr = dataArr.reduce((acc, curr) => {
    if (curr.isChecked === true) {
      acc.push(curr);
    }
    return acc;
  }, []);

  dispatch(addUserPreviewData(filteredArr));

  function updateManageArr(originalArr, updatedArr) {
    return originalArr.map((item) => {
      if (updatedArr.some((updatedItem) => updatedItem.id === item.id)) {
        return {
          ...item,
          isChecked: updatedArr.find(
            (updatedItem) => updatedItem.id === item.id
          ).isChecked,
        };
      }
      return item;
    });
  }

  const targetIndex = value;

  let updatedMainObj = objRedux.map((item, index) => {
    if (index === targetIndex) {
      return {
        ...item,
        verticalObj: {
          ...item.verticalObj,
          userTabTitle: {
            ...item.verticalObj.userTabTitle,
            manageArr: updateManageArr(
              item.verticalObj.userTabTitle.manageArr,
              childCheckboxList
            ),
          },
        },
      };
    }
    return item;
  });

  useEffect(() => {
    console.log(updatedMainObj)
    dispatch(storeMainObj(updatedMainObj));
  }, [childCheckboxList]);

  return (
    <div className="py-3">
      <div className="d-flex align-item-center gap-2">
        <input
          className="inputCheckBox"
          name="parentCheckBox"
          type="checkbox"
          onChange={childCheckBoxHandler}
          checked={!childCheckboxList.some((user) => user.isChecked !== true)}
        />

        <Typography variant="body5">Manage</Typography>
      </div>
      {dataArr.map((data) => (
        <div key={data.id} className="d-flex align-item-center gap-2 px-4 my-3">
          <input
            className="inputCheckBox"
            name={data.name}
            checked={data.isChecked || false}
            onChange={childCheckBoxHandler}
            type="checkbox"
          />
          <Typography variant="body5" key={data.id}>
            {data.name}
          </Typography>
        </div>
      ))}

    </div>
  );
};
export { CheckListComponentUser };