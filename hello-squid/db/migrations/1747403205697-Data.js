module.exports = class Data1747403205697 {
    name = 'Data1747403205697'

    async up(db) {
        await db.query(`CREATE TABLE "block" ("id" character varying NOT NULL, "number_of_txns" integer NOT NULL, CONSTRAINT "PK_d0925763efb591c2e2ffb267572" PRIMARY KEY ("id"))`)
    }

    async down(db) {
        await db.query(`DROP TABLE "block"`)
    }
}
