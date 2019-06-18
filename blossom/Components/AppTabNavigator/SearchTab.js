import React, { Component } from 'react';
import { Alert, FlatList, StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import { Icon } from 'native-base';
import ApiService from '../../services/ApiService';
// import SearchScreen from '../screens/SearchScreen';

// const UserListItem = ({ user, onPress }) => {
// 	return (
// 		<TouchableOpacity onPress={onPress}>
// 			<SearchScreen user={user} chevron={true} />
// 		</TouchableOpacity>
// 	);
// };

export default class SearchTab extends Component {
	static navigationOptions = {
		tabBarIcon: ({ tintColor }) => (
			<Icon name='ios-search' style={{ color: tintColor }} />
		)
	}
	constructor(props) {
		super(props);
		this.state = {
			list: [
				{
					id: 0,
					name: 'Chase Gulgowski',
					avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jm_denis/128.jpg'
				},
				{
					id: 1,
					name: 'Aurelie White',
					avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/martip07/128.jpg'
				},
				{
					id: 2,
					name: 'Mauricio Tremblay',
					avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/iamkeithmason/128.jpg'
				},
				{
					id: 3,
					name: 'Chanel Lang',
					avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/angelceballos/128.jpg'
				},
				{ "id": 4, "name": "Gus Bruen DVM", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrebay007/128.jpg" }, { "id": 5, "name": "Sigmund Schneider", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/barputro/128.jpg" }, { "id": 6, "name": "Krystel O'Hara", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/romanbulah/128.jpg" }, { "id": 7, "name": "Kaela Howell PhD", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stayuber/128.jpg" }, { "id": 8, "name": "Mrs. Pasquale Dibbert", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/gregkilian/128.jpg" }, { "id": 9, "name": "Mr. Gustave Frami", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/iqonicd/128.jpg" }, { "id": 10, "name": "Carlotta Ernser", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/osmond/128.jpg" }, { "id": 11, "name": "Daija Hoeger", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ademilter/128.jpg" }, { "id": 12, "name": "Lamar Tromp", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg" }, { "id": 13, "name": "America Wuckert", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/madysondesigns/128.jpg" }, { "id": 14, "name": "Lempi Cruickshank", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jayrobinson/128.jpg" }, { "id": 15, "name": "Anika Schimmel", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/nessoila/128.jpg" }, { "id": 16, "name": "Dessie Raynor", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/timmillwood/128.jpg" }, { "id": 17, "name": "Stevie Nikolaus", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/sachingawas/128.jpg" }, { "id": 18, "name": "Reinhold Kertzmann", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/gonzalorobaina/128.jpg" }, { "id": 19, "name": "Chyna Heller", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/rodnylobos/128.jpg" }, { "id": 20, "name": "Marcos Ryan", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ahmetalpbalkan/128.jpg" }, { "id": 21, "name": "Earline Cole", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/plbabin/128.jpg" }, { "id": 22, "name": "Sandra Schuster", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/gauravjassal/128.jpg" }, { "id": 23, "name": "Jerry Metz", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/baliomega/128.jpg" }, { "id": 24, "name": "Austen Oberbrunner Jr.", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg" }, { "id": 25, "name": "Ashton Bogisich", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/darylws/128.jpg" }, { "id": 26, "name": "Green Powlowski", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/melvindidit/128.jpg" }, { "id": 27, "name": "Dr. Hoyt Lueilwitz", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jayphen/128.jpg" }, { "id": 28, "name": "Dallas Wunsch", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/aio___/128.jpg" }, { "id": 29, "name": "Sandy Dach", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/unterdreht/128.jpg" }
			]
		};
	}

	componentDidMount() {
		ApiService.getUsers().then(resp => {
			this.setState({ list: resp.data });
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<FlatList style={styles.list}
					contentContainerStyle={styles.listContainer}
					data={this.state.list}
					horizontal={false}
					numColumns={2}
					keyExtractor={(item) => { (item) => `${item.id}` }}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity style={styles.card} onPress={() => Alert.alert(`${item.name} selected`)}>
								<View style={styles.cardHeader}>
									<Image style={styles.icon} source={{ uri: "https://img.icons8.com/flat_round/64/000000/hearts.png" }} />
								</View>
								<Image style={styles.userImage} source={{ uri: item.avatar }} />
								<View style={styles.cardFooter}>
									<View style={{ alignItems: "center", justifyContent: "center" }}>
										<Text style={styles.name}>{item.name}</Text>
										<TouchableOpacity style={styles.followButton} onPress={() => Alert.alert(`${item.name} selected`)}>
											<Text style={styles.followButtonText}>Follow</Text>
										</TouchableOpacity>
									</View>
								</View>
							</TouchableOpacity>
						);
					}} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
	},
	list: {
		paddingHorizontal: 5,
		backgroundColor: "#E6E6E6",
	},
	listContainer: {
		alignItems: 'center'
	},

	card: {
		shadowColor: '#00000021',
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.37,
		shadowRadius: 7.49,
		elevation: 12,

		marginVertical: 5,
		backgroundColor: "white",
		flexBasis: '46%',
		marginHorizontal: 5,
	},
	cardFooter: {
		paddingVertical: 17,
		paddingHorizontal: 16,
		borderTopLeftRadius: 1,
		borderTopRightRadius: 1,
		flexDirection: 'row',
		alignItems: "center",
		justifyContent: "center"
	},
	cardContent: {
		paddingVertical: 12.5,
		paddingHorizontal: 16,
	},
	cardHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 12.5,
		paddingBottom: 25,
		paddingHorizontal: 16,
		borderBottomLeftRadius: 1,
		borderBottomRightRadius: 1,
	},
	userImage: {
		height: 120,
		width: 120,
		borderRadius: 60,
		alignSelf: 'center',
		borderColor: "#DCDCDC",
		borderWidth: 3,
	},
	name: {
		fontSize: 18,
		flex: 1,
		alignSelf: 'center',
		color: "#008080",
		fontWeight: 'bold'
	},
	position: {
		fontSize: 14,
		flex: 1,
		alignSelf: 'center',
		color: "#696969"
	},
	followButton: {
		marginTop: 10,
		height: 35,
		width: 100,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 30,
		backgroundColor: "#00BFFF",
	},
	followButtonText: {
		color: "#FFFFFF",
		fontSize: 20,
	},
	icon: {
		height: 20,
		width: 20,
	}
});     