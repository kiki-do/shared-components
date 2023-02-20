import {
	FavoriteBorder,
	Favorite,
	SellOutlined,
	Sell,
} from "@mui/icons-material";
import { Checkbox } from "@mui/material";

import "./LikeTagIcons.sass";

const LikeTagIcons = () => {
	return (
		<div>
			<div className="like-tag__icons">
				<div className="like-button">
					<Checkbox
						icon={<FavoriteBorder />}
						checkedIcon={<Favorite />}
						color="error"
						style={{
							scale: "1.5",
						}}
					/>
					<p>145</p>
				</div>
				<div className="tag-button">
					<Checkbox
						id="tag"
						icon={<SellOutlined />}
						checkedIcon={<Sell />}
						color="secondary"
						style={{
							scale: "1.5",
							color: "#2A00A2",
						}}
					/>
					<label htmlFor="tag">Tag One</label>
				</div>
				<div className="status">
					<div className="status-sign"></div>
					<p>All systems go.</p>
				</div>
			</div>
		</div>
	);
};

export default LikeTagIcons;
