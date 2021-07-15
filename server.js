const express = require('express');
const app = express();
var faker = require('faker');

const User = () =>{
	return {
		userId:faker.datatype.uuid(),
		firstName:faker.name.firstName(),
		lastName:faker.name.lastName(),
		phoneNumber: faker.phone.phoneNumber(),
		email: faker.internet.email(),
		password: faker.internet.password()
	}
}

const Company = () =>{
	return {
		companyId:faker.datatype.uuid(),
		companyName:faker.company.companyName(),
		address:{
			street: faker.address.streetAddress(),
			city: faker.address.city(),
			state: faker.address.state(),
			zipCode: faker.address.zipCode(),
			country: faker.address.country(),
		}
	}
}


app.get('/api/users/new',(req,res)=>{
	let user = User()
	res.json(user)
})
app.get('/api/companies/new',(req,res)=>{
	let company = Company()
	res.json(company)
})
app.get('/api/user/company',(req,res)=>{
	let user = User()
	let company = Company()
	res.json({...user,...company})
})

app.listen(8000,()=>console.log('listening on 8000 port'))