import React from 'react';
import {DashOutlined,PlusCircleOutlined} from '@ant-design/icons'
import './HeaderPage.scss'
import {useNavigate} from "react-router-dom";
const HeaderPage = ({title,textButton,path}) => {
	const navigate = useNavigate()
	return (
		<div className={"Container"}>
			<div className={"title"}>{title}</div>
			<div className={"Right"}>
				<span className={"more"}><DashOutlined /></span>
				{path &&
					<div className={"buttonAdd"} onClick={()=>navigate(path)}>
						<span style={{lineHeight:'10px'}}><PlusCircleOutlined/></span>
						<span>{textButton}</span>
					</div>
				}
			</div>
		</div>
	);
};

export default React.memo(HeaderPage);