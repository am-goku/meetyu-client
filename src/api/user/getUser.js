export default function GET(req, res) {

    const obj = {
        name: "Gokul",
        age: 23,
        verified: true,
    }


    res.status(200).send(obj)

}